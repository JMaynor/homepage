import { getGraph } from "../../helpers/linkUtils.mjs";
import { getFileTree } from "../../helpers/filetreeUtils.mjs";
import { userComputed as userComputedHelper } from "../../helpers/userUtils.mjs";

export function graph(data) { return getGraph(data); }
export function filetree(data) { return getFileTree(data); }
export function userComputed(data) { return userComputedHelper(data); }
