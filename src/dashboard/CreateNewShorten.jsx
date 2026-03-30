import React, {useState} from 'react'
import {useStoreContext} from "../contextApi/ContextApi.jsx";
import {useForm} from "react-hook-form";
import TextField from "../components/TextField.jsx";
import {Tooltip} from "@mui/material";
import {RxCross2} from "react-icons/rx";
import Api from "../api/Api.js";
import toast from "react-hot-toast";

const CreateNewShorten = ({setOpen, refetch}) => {

    const {token} = useStoreContext();
    const [loading, setLoading] = useState(false);

    const{register, handleSubmit, reset, formState: {errors}} =
        useForm({defaultValues: {
                originalURL: '',
            },
            mode: "onTouched",
        });

    const createShortUrlHandler = async (data) => {
        setLoading(true);
        try {
            const {data: res} = await Api.post("/api/urls/shorten", data, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const shortenUrl = `http://url.urlshortnr/${res.shortURL}`;
            await navigator.clipboard.writeText(shortenUrl).then(() => {toast.success("Short URL copied to clipboard", {
                position: "bottom-center",
                className: "mb-5",
                duration: 3000,
            })});
            await refetch();
            reset();
            setOpen(false);
        }catch (error) {
            toast.error("Something went wrong in Creating shortURL");
        }finally {
            setLoading(false);
        }
    }

    return (
        <div className={"flex justify-center items-center bg-white rounded-md"}>
            <form className={"sm:w-112.5 w-90 relative  shadow-custom pt-8 pb-5 sm:px-8 px-4 rounded-lg"} onSubmit={handleSubmit(createShortUrlHandler)}>
                <h1 className={"font-montserrat sm:mt-0 mt-3 text-center  font-bold sm:text-2xl text-[22px] text-slate-800"}>
                    Create A New Short URL
                </h1>
                <hr className={"mt-2 sm:mb-5 mb-3 text-slate-950"}/>
                <div>
                    <TextField
                        label="Enter Your URL"
                        required
                        id="originalURL"
                        type="url"
                        message={"URL is required"}
                        placeholder={"https://example.com/"}
                        register={register}
                        errors={errors}
                    />
                </div>
                <button className={"cursor-pointer bg-rose-700 font-semibold text-white w-32  bg-linear-[#3b82f6,#9333ea] py-2 transition-colors  rounded-md my-3 type=text"}>
                    {loading ? "Loading..." : "Create"}
                </button>
                {!loading && (
                    <Tooltip title={"Close"}>
                        <button disabled={loading} onClick={() => setOpen(false)} className={"absolute right-2 top-2 cursor-pointer"}>
                            <RxCross2 className={"text-slate-800 text-3xl"}/>
                        </button>
                    </Tooltip>
                )}
            </form>
        </div>
    )
}
export default CreateNewShorten
