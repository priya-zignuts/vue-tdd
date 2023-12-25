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
    expect(wrapper.find("form").exists()).toBe(true);
    expect(wrapper.find("input#username").exists()).toBe(true);
    expect(wrapper.find("input#email").exists()).toBe(true);
    expect(wrapper.find("input#password").exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("updates data on input", async () => {
    const wrapper = mount(TestForm);

    wrapper.vm.form.username = "";
    wrapper.vm.form.email = "eve.holt@reqres.in";
    wrapper.vm.form.password = "pistol";

    expect(wrapper.find("input#username").element.value).toBe("");
    expect(wrapper.find("input#email").element.value).toBe(
      "eve.holt@reqres.in"
    );
    expect(wrapper.find("input#password").element.value).toBe("pistol");
  });

  it("emits form submission event", async () => {
    const wrapper = mount(TestForm);

    wrapper.vm.form.username = "";
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
    // console.log('response: ', response);

    // Assert the response
    expect(response.data).toEqual({ success: true });
  });
});
