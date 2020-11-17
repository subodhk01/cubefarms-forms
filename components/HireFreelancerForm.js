import { Select } from 'antd';
import React from 'react'
import StepWizard from 'react-step-wizard';
import { Radio } from 'antd';

const TYPE = {
    DEVELOPER: "developer",
    DESIGNER: "designer"
}

const SKILLS = {
    [TYPE.DESIGNER]: [
        "Adobe photoshop",
        "Logo",
        "Figma",
        "Wordpress",
        "Adobe illustrator",
        "Mobile UI",
        "Branding",
        "Wireframing",
        "Sketch",
        "Adobe after effects",
        "Adobe 3Ds max",
        "Motion builder",
        "Blender",
    ],
    [TYPE.DEVELOPER]: [
        "React",
        "Node JS",
        "CSS",
        "JAVASCRIPT",
        "HTML5",
        "Amazon web services",
        "Angular",
        "JAVA",
        "MySQL",
        "Python",
        "Ruby on rails",
        "React native",
        "Flutter",
        "Android",
        "IOS",
        "Wordpress",
        "Django",
        "Kubernates",
        "JQuery",
        "Ruby",
        "Angular JS",
        "Spring",
        "Typescript",
        "PHP",
    ]
}

let custom = {
    enterRight: 'animate__animated animate__fadeIn',
    enterLeft: 'animate__animated animate__fadeIn',
    exitRight: '',
    exitLeft: ''
}

export default function HireFreelancerForm(){
    const [ type, setType ] = React.useState()
    const [ kind, setKind ] = React.useState()
    const [ projectType, setProjectType ] = React.useState()
    const [ amount, setAmount ] = React.useState()
    const [ budget, setBudget ] = React.useState()
    const [ duration, setDuration ] = React.useState()
    const [ commitment, setCommitment ] = React.useState()
    const [ start, setStart ] = React.useState()
    const [ remotely, setRemotely ] = React.useState()
    return(
        <>
            <StepWizard initialStep={1} transitions={custom} className="h-100">
                <Step1 />
                <Step2 setType={setType} />
                <Step3 type={type} kind={kind} setKind={setKind} />
                <Step4 type={type} />
                <Step5 type={type} projectType={projectType} setProjectType={setProjectType} amount={amount} setAmount={setAmount} />
                <Step6 type={type} budget={budget} setBudget={setBudget} duration={duration} setDuration={setDuration} />
                <Step7 type={type} commitment={commitment} setCommitment={setCommitment} start={start} setStart={setStart} />
                <Step8 type={type} remotely={remotely} setRemotely={setRemotely} />
                <Step9 type={type} kind={kind} projectType={projectType} amount={amount} budget={budget} 
                    duration={duration} commitment={commitment} start={start} remotely={remotely} 
                />
            </StepWizard>
            <style jsx>{`
                .btn {
                    padding: 1rem 2rem;
                }
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
            <div className="text-center mb-5">
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
                        <div className="btn btn-next" onClick={() => props.nextStep()}>
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
        <div className="formStepContainer">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-5">
                            <h2 className="text-muted">What category of freelancers you are looking for :</h2>
                        </div>
                        <div>
                            <div className="row no-gutters">
                                <div className="col-6 p-2">
                                    <button onClick={() => props.setType(TYPE.DEVELOPER)} className="btn w-100 item-shadow cursor-pointer px-3 py-5 text-center">
                                        {/* <img /> */}
                                        <h4 className="m-0">Developers</h4>
                                    </button>
                                </div>
                                <div onClick={() => props.setType(TYPE.DESIGNER)} className="col-6 p-2">
                                    <button className="btn w-100 item-shadow cursor-pointer px-3 py-5 text-center">
                                        {/* <img /> */}
                                        <h4 className="m-0">Designers</h4>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-back" onClick={() => props.previousStep()}>
                            Back
                        </div>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .item-shadow:hover {
                    box-shadow: none;
                    background: #262d3d;
                }
                .item-shadow:hover h4 {
                    color: white;
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
        <div className="formStepContainer">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-5">
                            <h2 className="text-muted">What type of {props.type} you need :</h2>
                        </div>
                        <div>
                        <Radio.Group onChange={(event) => props.setKind(event.target.value)} value={props.kind}>
                            {props.type === TYPE.DEVELOPER &&
                                <>
                                    <Radio value={"frontend"} className="radio-container">Front End</Radio>
                                    <Radio value={"backend"} className="radio-container">Back End</Radio>
                                    <Radio value={"fullstack"} className="radio-container">Full Stack</Radio>
                                    <Radio value={"mobile"} className="radio-container">Mobile</Radio>
                                    <Radio value={"cms"} className="radio-container">CMS</Radio>
                                </>
                            }
                            {props.type === TYPE.DESIGNER &&
                                <>
                                    <Radio value={"UI"} className="radio-container">UI/ visual design</Radio>
                                    <Radio value={"UX"} className="radio-container">UX/research</Radio>
                                    <Radio value={"graphic"} className="radio-container">Brand/graphics design</Radio>
                                    <Radio value={"game"} className="radio-container">Game designer</Radio>
                                    <Radio value={"web"} className="radio-container">Web design</Radio>
                                    <Radio value={"product"} className="radio-container">Product design</Radio>
                                    <Radio value={"mobile"} className="radio-container">Mobile design</Radio>
                                    <Radio value={"illustrator"} className="radio-container">Illustrator</Radio>
                                    <Radio value={"animation"} className="radio-container">Animation/ motion graphics</Radio>
                                </>
                            }
                        </Radio.Group>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-back" onClick={() => props.previousStep()}>
                            Back
                        </div>
                        <button className="btn btn-next">
                            Next
                        </button>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .item-shadow:hover {
                    box-shadow: none;
                    background: #262d3d;
                }
            `}</style>
        </div>
    )
}

function Step4(props){
    const handleSubmit = (event) => {
        event.preventDefault()
        props.nextStep()
    }
    return(
        <div className="formStepContainer">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-5">
                            <h2 className="text-muted">What {props.type == TYPE.DESIGNER ? "design" : "technical"} skills do you require in your {props.type}:</h2>
                        </div>
                        <div>
                            <div className="d-flex flex-wrap align-items-center justify-content-center">
                                {props.type === TYPE.DEVELOPER &&
                                    <>
                                        {SKILLS[TYPE.DEVELOPER].map((item, index) =>
                                            <div onClick={() => props.setType(TYPE.DEVELOPER)} className="btn item-shadow cursor-pointer p-3 text-center" key={index}>
                                                {/* <img /> */}
                                                <h6 className="m-0">{item}</h6>
                                            </div>
                                        )}
                                    </>
                                }
                                {props.type === TYPE.DESIGNER &&
                                    <>
                                        {SKILLS[TYPE.DESIGNER].map((item, index) =>
                                            <div onClick={() => props.setType(TYPE.DEVELOPER)} className="btn item-shadow cursor-pointer p-3 text-center" key={index}>
                                                {/* <img /> */}
                                                <h6 className="m-0">{item}</h6>
                                            </div>
                                        )}
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-back" onClick={() => props.previousStep()}>
                            Back
                        </div>
                        <button className="btn btn-next">
                            Next
                        </button>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .formStepContainer{
                    max-width: 1200px;
                }
                .item-shadow {
                    width: 170px;
                    margin: 1rem;
                }
                h6 {
                    transition: 0.4s;
                }
                .item-shadow:hover {
                    box-shadow: none;
                    background: #262d3d;
                }
                .item-shadow:hover h6 {
                    color: white;
                }
            `}</style>
        </div>
    )
}

function Step5(props){
    const handleSubmit = (event) => {
        event.preventDefault()
        props.nextStep()
    }
    return(
        <div className="formStepContainer text-left">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-2">
                            <h2 className="text-muted">What type of project you’re hiring for:</h2>
                        </div>
                        <div className="mb-4 ml-0 ml-md-3">
                            <Radio.Group onChange={(event) => props.setProjectType(event.target.value)} value={props.projectType}>
                                <Radio value={"new_project"} className="radio-container">New project</Radio>
                                <Radio value={"existing"} className="radio-container">An existing project that needs additional resources</Radio>
                                <Radio value={"ongoing_assistance"} className="radio-container">Ongoing consultation/assistance</Radio>
                                <Radio value={"not_sure"} className="radio-container">I’m not sure</Radio>
                            </Radio.Group>
                        </div>
                        <div className="mb-2">
                            <h2 className="text-muted">How many {props.type}s you need :</h2>
                        </div>
                        <div className="ml-0 ml-md-3">
                            <Radio.Group onChange={(event) => props.setAmount(event.target.value)} value={props.amount}>
                                <Radio value={"one"} className="radio-container">One {props.type}</Radio>
                                <Radio value={"multiple"} className="radio-container">Multiple {props.type}s</Radio>
                                <Radio value={"cross"} className="radio-container">A cross-functional team (developers and designers)</Radio>
                                <Radio value={"decide_later"} className="radio-container">I’ll decide later</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-back" onClick={() => props.previousStep()}>
                            Back
                        </div>
                        <button className="btn btn-next">
                            Next
                        </button>
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

function Step6(props){
    const handleSubmit = (event) => {
        event.preventDefault()
        props.nextStep()
    }
    return(
        <div className="formStepContainer text-left">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-2">
                            <h2 className="text-muted">What is your hourly budget?</h2>
                        </div>
                        <div className="mb-4 ml-0 ml-md-3">
                            <Radio.Group onChange={(event) => props.setBudget(event.target.value)} value={props.budget}>
                                <Radio value={"20-40"} className="radio-container">20-40$</Radio>
                                <Radio value={"40-60"} className="radio-container">40-60$</Radio>
                                <Radio value={"60-80"} className="radio-container">60-80$</Radio>
                                <Radio value={">80"} className="radio-container">&gt;80$</Radio>
                                <Radio value={"not_sure"} className="radio-container">I’m not sure</Radio>
                            </Radio.Group>
                        </div>
                        <div className="mb-2">
                            <h2 className="text-muted">How long do you need a {props.type}?</h2>
                        </div>
                        <div className="ml-0 ml-md-3">
                            <Radio.Group onChange={(event) => props.setDuration(event.target.value)} value={props.duration}>
                                <Radio value={"1month"} className="radio-container">&gt;1 month</Radio>
                                <Radio value={"1-3month"} className="radio-container">1-3 month</Radio>
                                <Radio value={"3+month"} className="radio-container">3+ months</Radio>
                                <Radio value={"not_sure"} className="radio-container">I'm not sure</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-back" onClick={() => props.previousStep()}>
                            Back
                        </div>
                        <button className="btn btn-next">
                            Next
                        </button>
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

function Step7(props){
    const handleSubmit = (event) => {
        event.preventDefault()
        props.nextStep()
    }
    return(
        <div className="formStepContainer text-left">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-2">
                            <h2 className="text-muted">What level of time commitment do you require in your {props.type}?</h2>
                        </div>
                        <div className="mb-4 ml-0 ml-md-3">
                            <Radio.Group onChange={(event) => props.setCommitment(event.target.value)} value={props.commitment}>
                                <Radio value={"fulltime"} className="radio-container">Full time (40 or more hrs/week)</Radio>
                                <Radio value={"parttime"} className="radio-container">Part-time (Less than 40 hrs/week)</Radio>
                                <Radio value={"hourly"} className="radio-container">Hourly</Radio>
                                <Radio value={"not_sure"} className="radio-container">I'm not sure</Radio>
                            </Radio.Group>
                        </div>
                        <div className="mb-2">
                            <h2 className="text-muted">When you need the {props.type} to start?</h2>
                        </div>
                        <div className="ml-0 ml-md-3">
                            <Radio.Group onChange={(event) => props.setStart(event.target.value)} value={props.start}>
                                <Radio value={"within_a_week"} className="radio-container">Within a week</Radio>
                                <Radio value={"within_a_month"} className="radio-container">Within 1 month</Radio>
                                <Radio value={"within_2_months"} className="radio-container">Within 2 months</Radio>
                                <Radio value={"decide_later"} className="radio-container">I'll decide later</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-back" onClick={() => props.previousStep()}>
                            Back
                        </div>
                        <button className="btn btn-next">
                            Next
                        </button>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .formStepContainer {
                    max-width: 700px;
                }
                .item-shadow:hover {
                    box-shadow: none;
                    background: rgba(0,0,0,0.02)
                }
            `}</style>
        </div>
    )
}

function Step8(props){
    const handleSubmit = (event) => {
        event.preventDefault()
        props.nextStep()
    }
    return(
        <div className="formStepContainer text-left">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="mb-2">
                            <h2 className="text-muted">Are you comfortable working remotely with your {props.type}?</h2>
                        </div>
                        <div className="ml-0 ml-md-3">
                            <Radio.Group onChange={(event) => props.setRemotely(event.target.value)} value={props.remotely}>
                                <Radio value={"yes"} className="radio-container">Yes</Radio>
                                <Radio value={"no"} className="radio-container">No</Radio>
                                <Radio value={"not_sure"} className="radio-container">Not Sure</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-back" onClick={() => props.previousStep()}>
                            Back
                        </div>
                        <button className="btn btn-next">
                            Review
                        </button>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .formStepContainer {
                    max-width: 700px;
                }
                .item-shadow:hover {
                    box-shadow: none;
                    background: rgba(0,0,0,0.02)
                }
            `}</style>
        </div>
    )
}

function Step9(props){
    const handleSubmit = (event) => {
        event.preventDefault()
        props.nextStep()
    }
    return(
        <div className="formStepContainer text-left">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        review
                    </div>
                    <div className="text-center">
                        <button className="btn btn-next">
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
            <style jsx>{`
                .formStepContainer {
                    max-width: 700px;
                }
                .item-shadow:hover {
                    box-shadow: none;
                    background: rgba(0,0,0,0.02)
                }
            `}</style>
        </div>
    )
}