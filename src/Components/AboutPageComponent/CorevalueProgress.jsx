import React from 'react'
import coreValueData from '../../Data/CoreValueData'
import CanvasJSReact from '@canvasjs/react-charts';
import "./corevalueprogress.scss"
function CorevalueProgress() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        title: {
            text: "OUR PROGRESS"
        },
        data: [{
            type: "column",

            dataPoints: [
                
                { label: "Research", y: 85 },
                { label: "Industry Experience", y: 88 },
                { label: "Quality Control", y: 60 },
                { label: "Sales and Supply", y: 90 },
            ]
        }]
    }


    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row row-gap-4">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <h4 className='text-uppercase fw-bold mb-4'>OUR CORE VALUES</h4>
                            <div className="accordion" id="accordionExample">
                                {coreValueData.map((a) => (
                                    <div className="accordion-item" key={a.id}>
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button ${a.coreValueDataCollaspsed}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${a.coreValueDataId}`} aria-expanded={a.coreValueDataAreaExpand} aria-controls={a.coreValueDataId}>
                                                <strong className='d-flex gap-3 align-items-center'><i className={a.coreValueDataIcon}></i> {a.coreValueDataTitle}</strong>
                                            </button>
                                        </h2>
                                        <div id={a.coreValueDataId} className={`accordion-collapse collapse ${a.coreValueDatashow}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>{a.coreValueDataContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <CanvasJSChart options={options} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CorevalueProgress
