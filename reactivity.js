let targetMap = new WeakMap()

let effectStack = []
function track(target, key) {
  const effect = effectStack[effectStack.length - 1]
  console.log(effect);
  if (effect) {
    let depMap = targetMap.get(target)
    if (!depMap) {
      depMap = new Map()
      targetMap.set(target, depMap)
    }
    let dep = depMap.get(key)
    if (!dep) {
      dep = new Set()
      depMap.set(key, dep)
    }
    if (!dep.has(effect)) {
      dep.add(effect)
      effect.deps.push(dep)
    }
  }
}
function trigger(target, key, info) {
  let depMap = targetMap.get(target)

  if (!depMap) {
    return
  }

  const effects = new Set()
  const computeds = new Set()

  if (key) {
    let deps = depMap.get(key)
    deps.forEach((effect) => {
      if (effect.computed) {
        computeds.add(effect)
      } else {
        effects.add(effect)
      }
    })
  }
  effects.forEach((effect) => effect())
  computeds.forEach((effect) => effect())
}

const baseHandler = {
  get(target, key) {
    const ret = target[key]
    track(target, key)
    return ret
  },
  set(target, key, val) {
    const info = { oldValue: target[key], newValue: val }
    target[key] = val
    trigger(target, key, info)
  },
}

function reactive(target) {
  const observed = new Proxy(target, baseHandler)
  return observed
}
function run(effect, fn, args) {
  if (effectStack.indexOf(effect) === -1) {
    try {
      effectStack.push(effect)
      return fn(...args)
    } finally {
      effectStack.pop()
    }
  }
}
function createReactiveEffect(fn, options) {
  const effect = function effect(...args) {
    return run(effect, fn, args)
  }
  effect.deps = []
  effect.computed = options.computed
  effect.lazy = options.lazy
  return effect
}
function effect(fn, options = {}) {
  debugger
  let e = createReactiveEffect(fn, options)
  if (!options.lazy) {
    e()
  }
  return e
}

function computed(fn) {
  const runner = effect(fn, { computed: true, lazy: true })
  return {
    effect: runner,
    get value() {
      return runner()
    },
  }
}
