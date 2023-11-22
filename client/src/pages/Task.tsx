import { useState } from "react";
import Button from "../components/button/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const addTaskHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const values = { ...data };
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/tasks/create-task",
        values,
        {
          withCredentials: true,
        },
      );
      setIsLoading(false);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      setData({ ...data, title: "", description: "" });
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something wrong !");
    }
  };
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center bg-gray-100">
      <h1 className="pb-8 text-3xl font-semibold">Create a task</h1>
      <div className="w-full max-w-md border border-solid border-white bg-white">
        <form className=" w-full px-4 py-8" onSubmit={addTaskHandler}>
          <div className="flex flex-col">
            <label className="" htmlFor={"title"}>
              Title
            </label>
            <input
              id={"title"}
              autoComplete={"title"}
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              type={"text"}
              placeholder={"Enter title"}
              className="mb-4 mt-1 rounded-lg border border-solid border-blue-100 px-2 py-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="" htmlFor={"description"}>
              Description
            </label>
            <input
              id={"description"}
              autoComplete={"description"}
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              type={"text"}
              placeholder={"Enter Description"}
              className="mb-4 mt-1 rounded-lg border border-solid border-blue-100 px-2 py-2 outline-none"
            />
          </div>
          <Button disabled={isLoading} label={"Add Task"} />
        </form>
      </div>
    </div>
  );
};

export default Task;
