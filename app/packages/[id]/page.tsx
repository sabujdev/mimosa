import PackageDetailsSection from '@/components/package-details/PackageDetailsSection';
import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItemType';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;

  const packageItem = data.find((item: packageItem) => item.id === id);

  if (!packageItem) {
    return null;
  }

  return (
    <main>
      <PackageDetailsSection packageItem={packageItem} />
    </main>
  );
};

export default PackageDetailsPage;
