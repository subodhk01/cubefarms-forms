import Head from "next/head";
import HireFreelancerForm from "../components/HireFreelancerForm";

export default function HireExpertForm(){
    return(
        <>
            <Head>
                
            </Head>
            <div className="min-h100">
                <div className="h-100 row no-gutters align-items-stretch">
                    <div className="col-12 col-xl-9">
                        <div className="min-h100 d-flex align-items-center justify-content-center">
                            <HireFreelancerForm />
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 bg-grey">
                        sf
                    </div>
                </div>
            </div>
            <style jsx>{`
                .h-100 {
                    min-height: 100vh;
                }
                .bg-grey {
                    background-color: rgba(0,0,0,0.1);
                }
            `}</style>
        </>
    )
}