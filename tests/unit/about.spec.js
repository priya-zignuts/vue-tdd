import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  it('renders without errors', () => {
    const wrapper = shallowMount(AboutView)
    const heading = wrapper.find('h1');
    expect(heading.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true)
    expect(heading.text()).toBe('This is an about page');
  })
})