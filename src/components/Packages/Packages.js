import React from 'react';
import PackageCard from '../PackageCard/PackageCard';

const Packages = () => {
    return (
        <div className="bg-eee">
            <div className="container">
                <h1 className="py-4">Our Packages</h1>
                <div class="row row-cols-1 row-cols-md-4 g-4 pb-5">
                    <PackageCard></PackageCard>
                    <PackageCard></PackageCard>
                    <PackageCard></PackageCard>
                    <PackageCard></PackageCard>
                    <PackageCard></PackageCard>
                    <PackageCard></PackageCard>
                    <PackageCard></PackageCard>
                    <PackageCard></PackageCard>
                    <PackageCard></PackageCard>
                    <PackageCard></PackageCard>
                </div>
            </div>
        </div>
    );
};

export default Packages;