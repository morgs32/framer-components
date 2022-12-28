var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual3(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/react-snowfall/src/Snowfall.tsx
import React, { useCallback as useCallback2, useEffect as useEffect2, useRef as useRef2 } from "react";

// node_modules/react-snowfall/src/config.ts
var snowfallBaseStyle = {
  pointerEvents: "none",
  backgroundColor: "transparent",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};
var targetFrameTime = 1e3 / 60;

// node_modules/react-snowfall/src/hooks.ts
var import_react_fast_compare2 = __toModule(require_react_fast_compare());
import { useCallback, useLayoutEffect, useEffect, useRef, useState, useMemo } from "react";

// node_modules/react-snowfall/src/Snowflake.ts
var import_react_fast_compare = __toModule(require_react_fast_compare());

// node_modules/react-snowfall/src/utils.ts
function random(min, max) {
  const randomNumber = Math.random() * (max - min + 1) + min;
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return randomNumber;
  } else {
    return Math.floor(randomNumber);
  }
}
function lerp(start, end, normal) {
  return (1 - normal) * start + normal * end;
}
function getSize(element) {
  if (!element)
    return { height: 0, width: 0 };
  return {
    height: element.offsetHeight,
    width: element.offsetWidth
  };
}
function randomElement(items) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

// node_modules/react-snowfall/src/Snowflake.ts
var defaultConfig = {
  color: "#dee4fd",
  radius: [0.5, 3],
  speed: [1, 3],
  wind: [-0.5, 2],
  changeFrequency: 200,
  rotationSpeed: [-1, 1]
};
var _Snowflake = class {
  constructor(canvas, config = {}) {
    this.updateConfig(config);
    const { radius, wind, speed, rotationSpeed } = this.config;
    this.params = {
      x: random(0, canvas.offsetWidth),
      y: random(-canvas.offsetHeight, 0),
      rotation: random(0, 360),
      radius: random(...radius),
      speed: random(...speed),
      wind: random(...wind),
      rotationSpeed: random(...rotationSpeed),
      nextSpeed: random(...wind),
      nextWind: random(...speed),
      nextRotationSpeed: random(...rotationSpeed)
    };
    this.framesSinceLastUpdate = 0;
  }
  selectImage() {
    if (this.config.images && this.config.images.length > 0) {
      this.image = randomElement(this.config.images);
    } else {
      this.image = void 0;
    }
  }
  updateConfig(config) {
    const previousConfig = this.config;
    this.config = { ...defaultConfig, ...config };
    this.config.changeFrequency = random(this.config.changeFrequency, this.config.changeFrequency * 1.5);
    if (this.params && !(0, import_react_fast_compare.default)(this.config.radius, previousConfig?.radius)) {
      this.params.radius = random(...this.config.radius);
    }
    if (!(0, import_react_fast_compare.default)(this.config.images, previousConfig?.images)) {
      this.selectImage();
    }
  }
  updateTargetParams() {
    this.params.nextSpeed = random(...this.config.speed);
    this.params.nextWind = random(...this.config.wind);
    if (this.image) {
      this.params.nextRotationSpeed = random(...this.config.rotationSpeed);
    }
  }
  update(canvas, framesPassed = 1) {
    const { x, y, rotation, rotationSpeed, nextRotationSpeed, wind, speed, nextWind, nextSpeed, radius } = this.params;
    this.params.x = (x + wind * framesPassed) % (canvas.offsetWidth + radius * 2);
    if (this.params.x > canvas.offsetWidth + radius)
      this.params.x = -radius;
    this.params.y = (y + speed * framesPassed) % (canvas.offsetHeight + radius * 2);
    if (this.params.y > canvas.offsetHeight + radius)
      this.params.y = -radius;
    if (this.image) {
      this.params.rotation = (rotation + rotationSpeed) % 360;
    }
    this.params.speed = lerp(speed, nextSpeed, 0.01);
    this.params.wind = lerp(wind, nextWind, 0.01);
    this.params.rotationSpeed = lerp(rotationSpeed, nextRotationSpeed, 0.01);
    if (this.framesSinceLastUpdate++ > this.config.changeFrequency) {
      this.updateTargetParams();
      this.framesSinceLastUpdate = 0;
    }
  }
  getImageOffscreenCanvas(image, size) {
    if (image instanceof HTMLImageElement && image.loading)
      return image;
    let sizes = _Snowflake.offscreenCanvases.get(image);
    if (!sizes) {
      sizes = {};
      _Snowflake.offscreenCanvases.set(image, sizes);
    }
    if (!(size in sizes)) {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      canvas.getContext("2d")?.drawImage(image, 0, 0, size, size);
      sizes[size] = canvas;
    }
    return sizes[size] ?? image;
  }
  draw(ctx) {
    if (this.image) {
      ctx.setTransform(1, 0, 0, 1, this.params.x, this.params.y);
      const radius = Math.ceil(this.params.radius);
      ctx.rotate(this.params.rotation * Math.PI / 180);
      ctx.drawImage(this.getImageOffscreenCanvas(this.image, radius), -Math.ceil(radius / 2), -Math.ceil(radius / 2), radius, radius);
    } else {
      ctx.beginPath();
      ctx.arc(this.params.x, this.params.y, this.params.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.config.color;
      ctx.closePath();
      ctx.fill();
    }
  }
};
var Snowflake = _Snowflake;
Snowflake.offscreenCanvases = new WeakMap();
var Snowflake_default = Snowflake;

// node_modules/react-snowfall/src/hooks.ts
var createSnowflakes = (canvasRef, amount, config) => {
  if (!canvasRef.current)
    return [];
  const snowflakes = [];
  for (let i = 0; i < amount; i++) {
    snowflakes.push(new Snowflake_default(canvasRef.current, config));
  }
  return snowflakes;
};
var useSnowflakes = (canvasRef, amount, config) => {
  const [snowflakes, setSnowflakes] = useState([]);
  useEffect(() => {
    setSnowflakes((snowflakes2) => {
      const sizeDifference = amount - snowflakes2.length;
      if (sizeDifference > 0) {
        return [...snowflakes2, ...createSnowflakes(canvasRef, sizeDifference, config)];
      }
      if (sizeDifference < 0) {
        return snowflakes2.slice(0, amount);
      }
      return snowflakes2;
    });
  }, [amount, canvasRef, config]);
  useEffect(() => {
    setSnowflakes((snowflakes2) => snowflakes2.map((snowflake) => {
      snowflake.updateConfig(config);
      return snowflake;
    }));
  }, [config]);
  return snowflakes;
};
var useComponentSize = (ref) => {
  const [size, setSize] = useState(getSize(ref.current));
  const resizeHandler = useCallback(() => {
    if (ref.current) {
      setSize(getSize(ref.current));
    }
  }, [ref]);
  useLayoutEffect(() => {
    const { ResizeObserver } = window;
    if (!ref.current)
      return;
    resizeHandler();
    if (typeof ResizeObserver === "function") {
      const resizeObserver = new ResizeObserver(resizeHandler);
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    } else {
      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    }
  }, [ref, resizeHandler]);
  return size;
};
var useSnowfallStyle = (overrides) => {
  const styles = useMemo(() => ({
    ...snowfallBaseStyle,
    ...overrides || {}
  }), [overrides]);
  return styles;
};
function useDeepCompareEffect(effect, deps) {
  const ref = useRef(deps);
  if (!(0, import_react_fast_compare2.default)(deps, ref.current)) {
    ref.current = deps;
  }
  return useEffect(effect, ref.current);
}
function useDeepMemo(value) {
  const [state, setState] = useState(value);
  useDeepCompareEffect(() => setState(value), [value]);
  return state;
}

// node_modules/react-snowfall/src/Snowfall.tsx
var Snowfall = ({
  color = defaultConfig.color,
  changeFrequency = defaultConfig.changeFrequency,
  radius = defaultConfig.radius,
  speed = defaultConfig.speed,
  wind = defaultConfig.wind,
  rotationSpeed = defaultConfig.rotationSpeed,
  snowflakeCount = 150,
  images,
  style
} = {}) => {
  const mergedStyle = useSnowfallStyle(style);
  const canvasRef = useRef2(null);
  const canvasSize = useComponentSize(canvasRef);
  const animationFrame = useRef2(0);
  const lastUpdate = useRef2(Date.now());
  const config = useDeepMemo({ color, changeFrequency, radius, speed, wind, rotationSpeed, images });
  const snowflakes = useSnowflakes(canvasRef, snowflakeCount, config);
  const render = useCallback2((framesPassed = 1) => {
    const canvas = canvasRef.current;
    if (canvas) {
      snowflakes.forEach((snowflake) => snowflake.update(canvas, framesPassed));
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        snowflakes.forEach((snowflake) => snowflake.draw(ctx));
      }
    }
  }, [snowflakes]);
  const loop = useCallback2(() => {
    const now = Date.now();
    const msPassed = Date.now() - lastUpdate.current;
    lastUpdate.current = now;
    const framesPassed = msPassed / targetFrameTime;
    render(framesPassed);
    animationFrame.current = requestAnimationFrame(loop);
  }, [render]);
  useEffect2(() => {
    loop();
    return () => cancelAnimationFrame(animationFrame.current);
  }, [loop]);
  return /* @__PURE__ */ React.createElement("canvas", {
    ref: canvasRef,
    height: canvasSize.height,
    width: canvasSize.width,
    style: mergedStyle,
    "data-testid": "SnowfallCanvas"
  });
};
var Snowfall_default = Snowfall;
export {
  Snowfall_default as ReactSnowfall
};
