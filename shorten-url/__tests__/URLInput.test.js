import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import {act} from "react-dom/test-utils";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import URLInput from "../src/URLInput";

describe("URLInput tests", () => {
  test("should render", () => {
    expect(() => {
      mount(<URLInput urls={[]} onSubmit={() => {}} isLoading={false}/>);
    }).not.toThrow();
  });
  test("should submit with valid URL ", () => {
    const fn = jest.fn();
    let wrapper = mount(<URLInput onSubmit={fn} urls={[]} isLoading={false} />);
    const url = 'webflow.com';
    act(() => {
      wrapper.find('input').simulate('change', {target: {value: url}})
    });
    act(() => {
      wrapper.find('form').simulate('submit');
    });
    expect(fn).toHaveBeenCalledWith(url);
    wrapper.unmount();
  });
  
  test("should not submit with invalid URL ", () => {
    const fn = jest.fn();
    let wrapper = mount(<URLInput onSubmit={fn} urls={[]} isLoading={false} />);
    const url = 'invalid';
    act(() => {
      wrapper.find('input').simulate('change', {target: {value: url}})
    });
    act(() => {
      wrapper.find('form').simulate('submit');
    });
    expect(fn).not.toHaveBeenCalled();
    wrapper.unmount();
  });
  
  test("renders urls", () => {
    let urls = [
      ['webflow.com', 'https://wfl.io/04vvp'],
      ['webflow.com/ix2', 'https://wfl.io/07l3z'],
      ['https://webflow.com/ecommerce', 'https://wfl.io/08zs3'],
    ];
    const fn = () => {};
    let wrapper = shallow(<URLInput onSubmit={fn} urls={urls} isLoading={false} />);
    expect(wrapper.find('[data-automation-id="url-item"]')).toHaveLength(urls.length);
  });
});