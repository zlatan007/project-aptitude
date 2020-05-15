import React, {useEffect, Suspense } from 'react';

// lazy importing domain page
const NVR = React.lazy(() => import('./NVR'));
const QA_DI = React.lazy(() => import('./QA_DI'));
const VR_MA = React.lazy(() => import('./VR_MA'));
const QA_AA = React.lazy(() => import('./QA_AA'));
const VR_LD = React.lazy(() => import('./VR_LD'));

const components = {
    NVR: NVR,
    QA_DI: QA_DI,
    VR_MA: VR_MA,
    QA_AA: QA_AA,
    VR_LD: VR_LD
}

function DomainContent(){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let domain = null;
    switch(window.location.pathname.split('/')[2]){
        case 'quantitative-data-interpretation':
            domain = 'QA_DI';
            break;
        case 'non-verbal-reasoning':
            domain = 'NVR';
            break;
        case 'verbal-reasoning-mental-ability':
            domain = 'VR_MA';
            break;
        case 'quantitative-arithmetic-ability':
            domain = 'QA_AA';
            break;
        case 'verbal-reasoning-logical-deduction':
            domain = 'VR_LD';
            break;
        default:
            domain = null;
    }

    const ComponentToLoad = components[domain];

    return(
        <div className="container" style={{marginTop: 20}}>
            <Suspense fallback={<div>Loading...</div>}>
                <ComponentToLoad />
            </Suspense>
        </div>
    )
}

export default DomainContent;