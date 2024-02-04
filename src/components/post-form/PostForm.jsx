import React,{useCallback} from "react";
import { get, useForm } from "react-hook-form";
import Button from "../Button";
import Input from '..Input/Input'
import RTE from '../RTE'
import Select from "../Select"
import appwriteService from '../../appwrite/config'
import { UseSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function PostForm({post}) {
  const { register, handleSubmit, watch , setValue , control , getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status : post?.status || "active",
    }
  });
  const navigate = useNavigate()
  const userData = UseSelector((state) => state.auth.userData)
  const submit = async (data) => {}
  const slugTransform = useCallback((value) => {
        if(value && typeof value === "string"){
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+ /g, "-").replace(/\s/g, "-")

            
        }
    },[])
    
    React.useEffect(() => {
        watch(value, name => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title),{shouldValidate: true});
            }
        });
    }, [watch, slugTransform, setValue]);
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title"
                    {...register("title", { required: true })}
                    placeholder="Title"
                    className="mb-4"
                />
                <Input 
                    label="Slug"
                    {...register("slug", { required: true })}
                    placeholder="Slug"
                    className="mb-4"
                    onInput={(e) => setValue("slug", slugTransform(e.currentTarget.value),{shouldValidate: true})}
                    />
                <RTE
                    label="Content"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />
            </div>
            <div className="1/3 px-2">
                <Input
                    label="Slug"
                    {...register("slug", { required: true })}
                    placeholder="Slug"
                    error={errors.slug}
                />
            </div>
            
        </form>
    )
}
