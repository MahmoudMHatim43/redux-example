import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSubmit, handleChange } from "../actions/postsActions";
export const Form = () => {
  const { title, body } = useSelector((state) => state.posts.item);
  const dispatch = useDispatch();
  return (
    <section className="p-5">
      <h1 className="p-2 text-5xl font-bold">Add Post +</h1>
      <form
        onSubmit={(e) =>
          dispatch(
            handleSubmit(e, {
              title: title,
              body: body,
              id: crypto.randomUUID(),
            })
          )
        }
      >
        <div className="p-2">
          <label htmlFor="title">Title: </label>
          <br />
          <input
            id="title"
            name="title"
            type="text"
            placeholder="write the title"
            value={title}
            onChange={(e) => dispatch(handleChange(e))}
            className="w-1/4 h-[50px] p-2 text-[#444]"
          />
        </div>
        <div>
          <label htmlFor="body">Body: </label>
          <br />
          <textarea
            id="body"
            name="body"
            type="text"
            placeholder="write the body"
            value={body}
            onChange={(e) => dispatch(handleChange(e))}
            className="w-1/2 max-h-[200px] min-h-[200px] p-2 text-[#444]"
          />
        </div>
        <button
          type="submit"
          className="p-[0.5em_1em] text-black bg-orange-400"
        >
          Add+
        </button>
      </form>
    </section>
  );
};
