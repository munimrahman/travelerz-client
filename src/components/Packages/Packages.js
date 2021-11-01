import React from 'react';
import usePackages from '../../hooks/usePackages';
import PackageCard from '../PackageCard/PackageCard';

const Packages = () => {
    const [packages, isLoading] = usePackages();

    return (
        <div className="bg-eee">
            {isLoading === true ? <div className="text-center py-5">
                <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div> :
                <div className="container">
                    <h1 className="py-4">Our Packages</h1>
                    <div className="row row-cols-1 row-cols-md-4 g-4 pb-5">
                        {
                            packages?.map(singlePackage => <PackageCard
                                key={singlePackage.key}
                                singlePackage={singlePackage}
                            ></PackageCard>)
                        }
                    </div>
                </div>}
        </div>
    );
};

export default Packages;