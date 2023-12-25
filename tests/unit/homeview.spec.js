import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import TestForm from '@/components/TestForm.vue'

describe('HomeView.vue', () => {
  it('renders without errors', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.exists()).toBe(true)
  })

  it('has TestForm child component', () => {
    const wrapper = mount(HomeView)
    // Access the child component
    const testForm = wrapper.findComponent(TestForm);

    expect(testForm.exists()).toBe(true);
  })
})