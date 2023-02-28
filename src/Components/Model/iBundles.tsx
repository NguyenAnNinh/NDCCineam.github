import iSession from "./iSesstion"
export default interface iBundle {
    version: string,
    caption: string,
    sessions: Array<iSession>,
    code: string
}