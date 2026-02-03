import { useRef } from "react";
let BASE = import.meta.env.VITE_BASE_URL;

function CreatePosts() {
  let token = JSON.parse(localStorage.getItem(`token`));
  function close() {
    titleRef.current.value = "";
    contentRef.current.value = "";
    categoryRef.current.value = "";
    imgRef.current.value = "";
  }

  let titleRef = useRef();
  let contentRef = useRef();
  let categoryRef = useRef();
  let imgRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", titleRef.current.value);
    formData.append("content", contentRef.current.value);
    formData.append("image", imgRef.current.files[0]);
    formData.append("category", categoryRef.current.value);

    console.log(formData);
    try {
      let res = await fetch(`${BASE}/api/v1/articles/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
        body: formData,
      });
      if (!res.ok) {
        throw new Error(`postda muammo`);
      }
      let data = await res.json();
      console.log(data);
      titleRef.current.value = "";
      contentRef.current.value = "";
      categoryRef.current.value = "";
      imgRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-auto">
      <h1 className="text-[30px] font-bold text-[#0F1729]">Create New Post</h1>
      <p className="mt-[8px] mb-[32px] text-[16px] text-[#6B7280]">
        Fill in the details to create a new blog post
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-6">
          <div className="w-full max-w-[589px] rounded-[12px] border-[1px] border-[#E5E7EB] p-[25px]">
            <label className="block">
              <p className="mb-[12px] text-[14px] font-medium text-[#0F1729]">
                Post{" "}
              </p>
              <div className="rounded-[12px] border-[1px] border-[#E5E7EB] px-[13px] py-[11px]">
                <input
                  required
                  ref={titleRef}
                  className="w-full outline-0"
                  type="text"
                  placeholder="Enter post title..."
                />
              </div>
            </label>
            <label className="mt-[16px] block">
              <p className="mb-[12px] text-[14px] font-medium text-[#0F1729]">
                Content{" "}
              </p>
              <div className="rounded-[12px] border-[1px] border-[#E5E7EB] px-[13px] py-[11px]">
                <textarea
                  required
                  ref={contentRef}
                  className="h-[400px] w-full outline-0"
                  placeholder="Write your post content here..."
                ></textarea>
              </div>
            </label>
          </div>
          <div className="flex w-full max-w-[282px] flex-col gap-[24px]">
            <div className="rounded-[12px] border-[1px] border-[#E5E7EB] p-[24px]">
              <h1 className="mb-[16px] text-[30px] font-semibold text-[#0F1729]">
                Post Settings
              </h1>
              <label>
                <p className="mb-[12.5px] text-[14px] font-medium text-[#0F1729]">
                  Category
                </p>
                <select className="w-full" required ref={categoryRef}>
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="1">Technalogy</option>
                  <option value="2">Productivty</option>
                  <option value="3">Design</option>
                  <option value="4">Business</option>
                  <option value="5">Life style</option>
                </select>
              </label>
            </div>
            <div className="rounded-[12px] border-[1px] border-[#E5E7EB] p-[24px]">
              <label>
                <p className="mb-[16px] text-[30px] font-semibold text-[#0F1729]">
                  Featured Image
                </p>
                <input ref={imgRef} type="file" />
              </label>
            </div>
            <div className="flex gap-[12px]">
              <button className="rounded-[12px] bg-[#4346EF] px-[24px] py-[12px] text-white">
                Publish Post
              </button>
              <button
                onClick={() => {
                  close();
                }}
                className="rounded-[12px] border-[2px] border-[#E5E7EB] px-[24px] py-[12px] text-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePosts;
