import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import App from "@/App.vue";

describe("HomeView.vue", () => {
  it("renders navigation link correctly", async () => {
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    const links = wrapper.findAllComponents(RouterLinkStub)
    // console.log('links: ', links);
    // expect(links).toHaveLength(3)
    // expect(links.at(0).text()).toBe('Home')

    await wrapper.findComponent(RouterLinkStub).trigger('click');
    expect(wrapper.vm.$route.path).toBe('/');
  });
});
