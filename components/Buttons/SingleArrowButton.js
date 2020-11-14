import { BsArrowRightShort } from 'react-icons/bs'
import { MdSend } from 'react-icons/md'

export default function(props) {
    return (
        <>
            <button className="btn btn-round" disabled={props.disabled}>
                <div className="d-flex align-items-center">
                    <div className="text-content">
                        {props.children}
                    </div>
                    <div className="arrow pl-2">
                        {props.send ?
                            <MdSend className="pl-1" color="white" size="21" />
                            :
                            <BsArrowRightShort color="white" size="24" />
                        }
                        
                    </div>
                </div>
            </button>
            <style jsx>{`
                .text-content {
                    position: relative;
                    left: 15px;
                    transition: 0.3s
                }
                .arrow {
                    transform: scale(0);
                    transition: 0.3s;
                    overflow: hidden;
                }
                .btn:hover .arrow{
                    transform: scale(1.2);
                }
                .btn:hover .text-content {
                    left: 5px;
                }
                .btn-round {
                    padding: 0.63rem 1.7rem;
                    background: #0056FF;
                    border: none;
                    border-radius: 100px;
                    color: white;
                    font-size: 0.8rem;
                }
                .btn-round:hover {
                    color: white;
                }
            `}</style>
        </>
    )
}