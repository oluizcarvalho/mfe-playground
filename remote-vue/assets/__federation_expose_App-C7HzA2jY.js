import { importShared } from './__federation_fn_import-Di0Fu3Ot.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,toDisplayString:_toDisplayString,vModelText:_vModelText,withDirectives:_withDirectives,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { class: "widget" };
const _hoisted_2 = { class: "widget-stats" };
const _hoisted_3 = { class: "widget-stat" };
const _hoisted_4 = { class: "stat-number" };
const _hoisted_5 = { class: "widget-stat" };
const _hoisted_6 = { class: "stat-number" };
const {ref,onMounted} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "App",
  setup(__props) {
    const count = ref(0);
    const message = ref("Hello from Vue!");
    onMounted(() => {
      console.log("[remote-vue] App mounted via Vite Federation");
    });
    function increment() {
      count.value++;
    }
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _cache[4] || (_cache[4] = _createElementVNode("div", { class: "widget-header" }, [
          _createElementVNode("span", { class: "widget-icon" }, "◈"),
          _createElementVNode("h3", null, "Vue Remote Widget")
        ], -1)),
        _cache[5] || (_cache[5] = _createElementVNode("p", { class: "widget-description" }, [
          _createTextVNode(" This component is served from "),
          _createElementVNode("strong", null, "remote-vue"),
          _createTextVNode(" (port 4203) via Vite Module Federation. ")
        ], -1)),
        _createElementVNode("div", _hoisted_2, [
          _createElementVNode("div", _hoisted_3, [
            _createElementVNode("span", _hoisted_4, _toDisplayString(count.value), 1),
            _cache[1] || (_cache[1] = _createElementVNode("span", { class: "stat-label" }, "Counter", -1))
          ]),
          _cache[3] || (_cache[3] = _createElementVNode("div", { class: "widget-stat" }, [
            _createElementVNode("span", { class: "stat-number vue-version" }, "v3"),
            _createElementVNode("span", { class: "stat-label" }, "Vue")
          ], -1)),
          _createElementVNode("div", _hoisted_5, [
            _createElementVNode("span", _hoisted_6, _toDisplayString(message.value.length), 1),
            _cache[2] || (_cache[2] = _createElementVNode("span", { class: "stat-label" }, "Msg Len", -1))
          ])
        ]),
        _withDirectives(_createElementVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => message.value = $event),
          class: "widget-input",
          placeholder: "Type a message..."
        }, null, 512), [
          [_vModelText, message.value]
        ]),
        _createElementVNode("button", {
          class: "widget-btn",
          onClick: increment
        }, "Increment Counter")
      ]);
    };
  }
});

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b184aea6"]]);

export { App as default };
