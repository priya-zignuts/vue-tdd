import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import { createStore } from "vuex";

const createVuexStore = () => {
  return createStore({
    state() {
      return {
        count: 1,
      };
    },
    mutations: {
      increment(state) {
        state.count += 1;
      },
    },
  });
};
function factory() {
  const store = createVuexStore();
  return mount(Counter, {
    global: {
      plugins: [store],
    },
  });
}

describe("Counter.vue", () => {
  it("render count when even", async () => {
    const wrapper = factory();
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    // expect(wrapper.html()).toContain("Count 2, count is even");
  });

  it("render count when odd", async () => {
    const wrapper = factory();
    await wrapper.find("button").trigger("click");
    // expect(wrapper.html()).toContain("Count 1, count is odd");
  });
});
