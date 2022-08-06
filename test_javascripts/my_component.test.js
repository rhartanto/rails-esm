import { mount } from '@vue/test-utils'
import App from '../app/javascript/my_component.vue'

test('renders a todo', () => {
  const wrapper = mount(App)

  const todo = wrapper.get('[data-test="app-message"]')

  expect(todo.text()).toBe('Hello Vue!')
})
