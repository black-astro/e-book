
import { useSideBar } from '@components/utils/sideBarContext';

export default function Body() {

    const { toggleSideBar } = useSideBar();

  return (
    <>
        <div>
            <button onClick={toggleSideBar}>
                    test
            </button>
        </div>
    </>
  );
}