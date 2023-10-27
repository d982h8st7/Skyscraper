import { Box3, Mesh } from "three";
import { Axis, Line } from "../Types/common";

export default class BoxHelper {
    static getAxisLine(box3: Box3, axis: Axis): Line {
        const start = box3.min[axis];
        const end = box3.max[axis];

        return ({ start, end });
    }

    static wrapMeshToBox(mesh: Mesh): Box3 {
        return new Box3().setFromObject(mesh);
    }
}