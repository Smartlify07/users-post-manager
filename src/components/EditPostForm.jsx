import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import usePostsContext from "../hooks/usePostsContext";
import { useLoaderData, useNavigate, useRouteError } from "react-router-dom";
import { editPost } from "../functions/editPost";

const EditPostForm = () => {
  const { setPosts } = usePostsContext();
  const { post } = useLoaderData();
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Formik
        initialValues={{
          content: post.body,
          title: post.title,
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(3, "Post title more be more than 10 characters")
            .required("Post title is required"),

          content: Yup.string()
            .min(10, "Your content must more be more than 10 characters")
            .required("Post content is required"),
        })}
        onSubmit={(values) => {
          editPost(post.id, values.title, values.content, setPosts, navigate);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-7 items-center  lg:mt-10 ">
            <TextInput type="text" placeholder="Title" name="title" />
            <Field placeholder="Content" name="content" className="">
              {({ field }) => (
                <>
                  <textarea
                    {...field}
                    placeholder="Content"
                    className="resize-none w-full rounded-sm py-3 px-4 text-lg border lg:w-2/3 focus:outline-none"
                    rows={5}
                  ></textarea>

                  {errors.content && touched.content && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors.content}
                    </p>
                  )}
                </>
              )}
            </Field>

            <button
              type="submit"
              className="px-7 py-3 rounded-sm font-semibold text-white bg-slate-900"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {error && <p>{error.message}</p>}
    </>
  );
};

export default EditPostForm;
