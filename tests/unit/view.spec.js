import { shallowMount } from "@vue/test-utils";
import View from "@/components/View.vue";

describe("View.vue", () => {
  it("renders without errors", () => {
    const mockUserData = {
      username: 'priya',
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    const wrapper = shallowMount(View, {
      propsData: {
        userData: mockUserData
      },
    });

    expect(wrapper.find('h3').text()).toBe('priya');
    expect(wrapper.find('p').text()).toBe('eve.holt@reqres.in');
  });
});
