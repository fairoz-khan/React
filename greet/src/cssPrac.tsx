import React from 'react';
import './index.css';
export const CssPrac = () => {
    return (
        <>
            <div className="container-sm">100% wide until small breakpoint</div>
            <div className="container-md">100% wide until medium breakpoint</div>
            <div className="container-lg">100% wide until large breakpoint</div>
            <div className="container-xl">100% wide until extra large breakpoint</div>
            <div className="container-xxl">100% wide until extra extra large breakpoint</div>

            <div className="container text-center">
                <div className="row">
                    <div className="col bgColor">
                        1 of 2
                    </div>
                    <div className="col bgColor">
                        2 of 2
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        1 of 3
                    </div>
                    <div className="col bgColor">
                        2 of 3
                    </div>
                    <div className="col bgColor">
                        3 of 3
                    </div>
                </div>
            </div>
        </>

    )
}