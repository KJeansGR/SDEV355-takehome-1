import { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const initialApplication = {
	company: "hello",
	role: "",
	status: "",
	appliedOn: "",
	source: "",
	url: "",
    notes: ""
};

export default function ApplicationForm() {
    const params = useParams();
    const[formErrors, setFormErrors] = useState({company: true, role: true, dateFormat: true});
	const {register, handleSubmit, reset} = useForm(initialApplication);

	function onSubmit(formData){
        
        const validateCompany = formData.company !== "";
        const validateRole = formData.role !== "";
        const validateDateFormat = formData?.appliedOn.year < new Date().getFullYear();

        setFormErrors({company: validateCompany, role: validateRole, dateFormat: validateDateFormat});

        if(formErrors != null && Object.keys(formErrors).length === 0){
            console.log("Application submitted:", formData);
            reset();
        }
        else
        console.log("Application could not be submitted");
	};

    useEffect(()=>{
        if(params.id){
            //set form values for the application value       
            console.log(params.id);
        }
    }, []);
	return (
        <div className="container">
            <h1>Application Form</h1>

            <form className="form-row" onSubmit={handleSubmit(onSubmit)}>

                <div className={` field ${!formErrors.company ? "invalid" : ""}`}>
                    <label className="form-label" htmlFor="company"> Company </label>
                    <input 
                        id="company" 
                        {...register("company")}
                    />
                    {!formErrors.company && <span className="message">company required</span>}
                </div>

                
                <div className="field">
                    <label className="form-label" htmlFor="role"> Role </label>
                    <input id="role" {...register("role")} />
                </div>

                <div className="field">
                    <label className="form-label" htmlFor="status"> Status </label>
                    <input id="status" {...register("status")} />
                </div>

                <div className="field">
                    <label className="form-label" htmlFor="appliedOn"> Applied On </label>
                    <input id="appliedOn" type="date" {...register("appliedOn")} />
                </div>

                <div className="field">
                    <label className="form-label" htmlFor="source"> Source </label>
                    <input id="source" {...register("source")} />
                </div>
                
                <div className="field">
                    <label className="form-label" htmlFor="url"> Posting URL </label>
                    <input id="url" type="url" {...register("url")} />
                </div>


                <div className="field tArea">
                    <label className="form-label" htmlFor="notes"> Additional information </label>
                    <textarea id="notes" rows={4} {...register("notes")} />
                </div>

                <div className="" style={{display: "flex", gap: "2rem"}}>
                    <button className="btn-primary btn" type="submit" > Submit application </button>
                    <button className="btn" type="submit" > cancel </button>
                </div>

            </form>
        </div>
	);
}
