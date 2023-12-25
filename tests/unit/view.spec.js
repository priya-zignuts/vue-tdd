import { mount } from "@vue/test-utils";
import View from "@/components/View.vue";
import {reactive} from "vue";
import {createStore} from "vuex"

const createVuexStore = () => {
  return createStore({
  state() {
    return{
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    }
  }
})
}

function factory() {
  const state = reactive({count: 0})
  const mockUserData = {
    username: 'priya',
    email: "eve.holt@reqres.in",
    password: "pistol",
  };
  return mount(View, {
    propsData: {
      userData: mockUserData
    },
    global: {
      provide: {
        'store': {
          state,
          commit: () => {
            state.count += 1
          }
        }
      }
    }
  })
}
describe("View.vue", () => {
  it("renders without errors", () => {
    
    const wrapper = factory()

    expect(wrapper.find('h3').text()).toBe('priya');
    expect(wrapper.find('p').text()).toBe('eve.holt@reqres.in');
  });
});
