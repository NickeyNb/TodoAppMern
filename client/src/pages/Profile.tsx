import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios, { AxiosResponse } from "axios";
import Button from "../components/button/Button";

type Tasks = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

const Profile = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  // When you use useState([]), TypeScript infers the type as an empty array, and it doesn't know the structure of the objects inside the array.
  // Hence, (T)asks we specify the objects inside the array

  const getAllTasks = async () => {
    try {
      const res: AxiosResponse = await axios.get(
        "http://localhost:4000/api/v1/tasks/my-tasks",
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        setTasks(res.data.myTasks);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // initial time fetch

  useEffect(() => {
    getAllTasks();
  }, [tasks]); // whenever their is a change in tasks array

  const completeHandler = async (tid: string) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/v1/tasks/update-task/${tid}`,
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error complete");
    }
  };
  const deleteHandler = async (tid: string) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/v1/tasks/delete-task/${tid}`,
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Delete");
    }
  };
  return (
    <div className="pt-20">
      <h1 className="text-center">My Tasks</h1>
      {tasks?.map((task, i) => {
        return (
          <div key={i}>
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex w-4/5 flex-col">
                <h1>{task.id}</h1>
                <h1>{task.title}</h1>
                <h1>{task.description}</h1>
                <h1>{task.isCompleted.toString()}</h1>
              </div>

              <div className="flex w-1/5 items-center justify-between space-x-2">
                {task.isCompleted ? (
                  <>
                    <Button label={"Done"} disabled={true} />
                  </>
                ) : (
                  <>
                    <Button
                      label={"Completed"}
                      onClick={() => completeHandler(task.id)}
                    />
                    <Button
                      label={"Delete"}
                      onClick={() => deleteHandler(task.id)}
                    />
                  </>
                )}
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
