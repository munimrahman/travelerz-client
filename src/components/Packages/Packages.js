import usePackages from '../../hooks/usePackages';
import PackageCard from '../PackageCard/PackageCard';

const Packages = () => {
    const packages = usePackages();

    return (
        <div className="bg-eee">
            <div className="container">
                <h1 className="py-4">Our Packages</h1>
                <div class="row row-cols-1 row-cols-md-4 g-4 pb-5">
                    {
                        packages?.map(singlePackage => <PackageCard
                            key={singlePackage.key}
                            singlePackage={singlePackage}
                        ></PackageCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;