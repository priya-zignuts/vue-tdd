import { mount } from "@vue/test-utils";
import TestForm from "@/components/TestForm.vue";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Create a mock instance
const mockAxios = new MockAdapter(axios);

describe("From.vue", () => {
  it("renders form inputs and button", () => {
    const wrapper = mount(TestForm);

    // Check if the form contains necessary elements
    expect(wrapper.find("v-form").exists()).toBe(true);
    expect(wrapper.find('[label="Username"]').exists()).toBe(true);
    expect(wrapper.find('[label="Email"]').exists()).toBe(true);
    expect(wrapper.find('[label="Password"]').exists()).toBe(true);
    expect(wrapper.find("v-btn").exists()).toBe(true);
  });

  it("updates data on input", async () => {
    const wrapper = mount(TestForm);

    wrapper.vm.form.username = "priya";
    wrapper.vm.form.email = "eve.holt@reqres.in";
    wrapper.vm.form.password = "pistol";

    expect(wrapper.find("input#username").element.value).toBe("priya");
    expect(wrapper.find("input#email").element.value).toBe(
      "eve.holt@reqres.in"
    );
    expect(wrapper.find("input#password").element.value).toBe("pistol");
  });

  it("emits form submission event", async () => {
    const wrapper = mount(TestForm);

    wrapper.vm.form.username = "priya";
    wrapper.vm.form.email = "eve.holt@reqres.in";
    wrapper.vm.form.password = "pistol";

    await wrapper.find("form").trigger("submit.prevent");
  });

  it("should make a successful POST request", async () => {
    // Mock the POST request
    const input = { email: "eve.holt@reqres.in", password: "pistol" };
    mockAxios.onPost("https://reqres.in/api/register", input).reply(200, { success: true });

    // Perform the actual function that makes the Axios request
    const response = await axios.post("https://reqres.in/api/register", input);

    // Assert the response
    expect(response).toEqual({ success: true });
  });
});
