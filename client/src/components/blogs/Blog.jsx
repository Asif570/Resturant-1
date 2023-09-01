const Blog = () => {
  return (
    <div className=" my-20 px-5">
      <ol>
        <li className="mb-16 rounded border p-5">
          <h3 className="text-bold text-xl md:text-3xl font-bold text-white capitalize mb-5">
            differences between uncontrolled and controlled components
          </h3>
          <p className="text-white capitalize">
            a controlled component is a component that is controlled by React
            state, while an uncontrolled component is a component that maintains
            its own internal state.
          </p>
        </li>
        <li className="mb-16 rounded border p-5">
          <h3 className="text-bold text-xl md:text-3xl font-bold text-white capitalize mb-5">
            difference between nodejs and express js.
          </h3>
          <p className="text-white capitalize">
            Express is a minimal and flexible node. js web application
            framework, providing a robust set of features for building single
            and multi-page, and hybrid web applications. On the other hand,
            Node. js is detailed as "A platform built on Chrome's JavaScript
            runtime for easily building fast, scalable network applications".
          </p>
        </li>
        <li className="mb-16 rounded border p-5">
          <h3 className="text-bold text-xl md:text-3xl font-bold text-white capitalize mb-5">
            What is a custom hook
          </h3>
          <p className="text-white capitalize">
            A custom Hook is a JavaScript function whose name starts with ”use”
            and that may call other Hooks. That's it! If you have code in a
            component that you feel would make sense to extract, either for
            reuse elsewhere or to keep the component simpler, you can pull that
            out into a function.
          </p>
        </li>
      </ol>
    </div>
  );
};
export default Blog;
