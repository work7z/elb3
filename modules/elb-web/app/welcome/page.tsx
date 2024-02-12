import GrailLayoutWithUser from "../__CORE__/containers/GrailLayoutWithUser";
import { CombindSearchProps } from "../page";

export default (props: {
    combindSearchProps: CombindSearchProps
}) => {
    let { combindSearchProps } = props;
    let { searchParams } = combindSearchProps;

    return <GrailLayoutWithUser combindSearchProps={combindSearchProps} children={<div>this is children</div>}>
    </GrailLayoutWithUser>
}
