import { Select } from 'antd';
import React from 'react'
import StepWizard from 'react-step-wizard';
import { Radio } from 'antd';

const TYPE = {
    DEVELOPER: "developer",
    DESIGNER: "designer"
}

let custom = {
    enterRight: 'animate__animated animate__fadeIn',
    enterLeft: 'animate__animated animate__fadeIn',
    exitRight: 'animate__animated animate__fadeOut animate__faster',
    exitLeft: 'animate__animated animate__fadeOut animate__faster'
}

export default function HireFreelancerForm(){
    const [ type, setType ] = React.useState()
    const [ kind, setKind ] = React.useState()
    return(
        <>
            <StepWizard initialStep={1} transitions={custom} className="h-100">
                <Step1 />
                <Step2 setType={setType} />
                <Step3 type={type} kind={kind} setKind={setKind} />
            </StepWizard>
            <style jsx>{`
                
            `}</style>
        </>
    )
}
// PROPS:
// variables:  currentStep, totalSteps, isActive onClick={props.} 
// functions: previousStep, nextStep, goToStep(2), firstStep, lastStep
//

function Step1(props){
    return(
        <div className="formStepContainer">
            <div className="text-center">
                <h3 className="mt-bold">Thank you for your interest in freetribe</h3>
                <h5 className="text-muted">Hire trained and vetted freelancers from our exclusive community</h5>
            </div>
            <div>
                <form>
                    <div className="form-group">
                        <div className="row no-gutters">
                            <div className="col-6 pr-2">
                                <label>First Name</label>
                                <input className="form-control" type="text" name="name" placeholder="Elon" />
                            </div>
                            <div className="col-6 pl-2">
                                <label>Last Name</label>
                                <input className="form-control" type="text" name="name" placeholder="Musk" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" placeholder="person@superhero.com" />
                    </div>
                    <div className="form-group">
                        <label>Phone No</label>
                        <input className="form-control" type="text" name="phone" placeholder="+91-8989820993" />
                    </div>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input className="form-control" type="text" name="company" placeholder="Super Company" />
                    </div>
                    <div className="form-group">
                        <label>We’re curious, how did you hear about us?</label>
                        <Select style={{width: "100%"}}>
                            <Select.Option value="google">Google search</Select.Option>
                            <Select.Option value="friend">From a friend</Select.Option>
                            <Select.Option value="linkedin">Linkedin</Select.Option>
                            <Select.Option value="facebook">Facebook</Select.Option>
                            <Select.Option value="twitter">Twitter</Select.Option>
                            <Select.Option value="instagram">Instagram</Select.Option>
                            <Select.Option value="youtube">Youtube</Select.Option>
                            <Select.Option value="newsarticles">News articles</Select.Option>
                            <Select.Option value="emails">Emails</Select.Option>
                            <Select.Option value="other">Other</Select.Option>
                        </Select>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-info" onClick={() => props.nextStep()}>
                            Next
                        </div>
                    </div>
                </form>
            </div>
            <style jsx>{`

            `}</style>
        </div>
    )
}

function Step2(props){
    const handleSubmit = (event) => {
        event.preventDefault()
        props.nextStep()
    }
    return(
        <div className="">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-5">
                            <h5 className="text-muted">What category of freelancers you are looking for :</h5>
                        </div>
                        <div>
                            <div className="row no-gutters">
                                <div className="col-6 p-2">
                                    <button onClick={() => props.setType(TYPE.DEVELOPER)} className="btn w-100 item-shadow cursor-pointer px-3 py-5 text-center">
                                        {/* <img /> */}
                                        <h4>Developers</h4>
                                    </button>
                                </div>
                                <div onClick={() => props.setType(TYPE.DESIGNER)} className="col-6 p-2">
                                    <button className="btn w-100 item-shadow cursor-pointer px-3 py-5 text-center">
                                        {/* <img /> */}
                                        <h4>Designers</h4>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-info" onClick={() => props.previousStep()}>
                            Back
                        </div>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .item-shadow:hover {
                    box-shadow: none;
                    background: rgba(0,0,0,0.02)
                }
            `}</style>
        </div>
    )
}

function Step3(props){
    const handleSubmit = (event) => {
        event.preventDefault()
        props.nextStep()
    }
    return(
        <div className="">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-5">
                            <h5 className="text-muted">What type of {props.type} you need :</h5>
                        </div>
                        <div>
                        <Radio.Group onChange={(event) => props.setKind(event.target.value)} value={props.kind}>
                            {props.type === TYPE.DEVELOPER &&
                                <>
                                    <Radio value={"frontend"}>Front End</Radio>
                                    <Radio value={"backend"}>Back End</Radio>
                                    <Radio value={"fullstack"}>Full Stack</Radio>
                                    <Radio value={"mobile"}>Mobile</Radio>
                                    <Radio value={"cms"}>CMS</Radio>
                                </>
                            }
                            {props.type === TYPE.DESIGNER &&
                                <>
                                    <Radio value={"UI"}>UI/ visual design</Radio>
                                    <Radio value={"UX"}>UX/research</Radio>
                                    <Radio value={"graphic"}>Brand/graphics design</Radio>
                                    <Radio value={"game"}>Game designer</Radio>
                                    <Radio value={"web"}>Web design</Radio>
                                    <Radio value={"product"}>Product design</Radio>
                                    <Radio value={"mobile"}>Mobile design</Radio>
                                    <Radio value={"illustrator"}>Illustrator</Radio>
                                    <Radio value={"animation"}>Animation/ motion graphics</Radio>
                                </>
                            }
                        </Radio.Group>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-info" onClick={() => props.previousStep()}>
                            Back
                        </div>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .item-shadow:hover {
                    box-shadow: none;
                    background: rgba(0,0,0,0.02)
                }
            `}</style>
        </div>
    )
}