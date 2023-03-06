import "@/shared/helpers/string.extensions";
import { RouteRecordRaw, RouteMeta } from "vue-router";
import { routes } from "@/router/index";

export interface BreadcrumbsItem {
  text: string;
  disable: boolean;
  to: string;
  exact?: boolean;
}

function getFullPathFromRouteRecords(nodes: Array<RouteRecordRaw>): string {
  return nodes
    .filter((item: RouteRecordRaw): boolean => item.path.length > 0)
    .map((item: RouteRecordRaw): string => item.path.trimAny("/"))
    .join("/");
}

function explore(
  path: string,
  currentNode: RouteRecordRaw,
  parenNodes: Array<RouteRecordRaw>
): RouteRecordRaw[] {
  const copyOfParentNodes = [...parenNodes];
  const explorePath = getFullPathFromRouteRecords(copyOfParentNodes);
  const searchPath: string = path.replace(new RegExp(`^${explorePath}`, "g"), "");

  if (currentNode.path.trimAny("/") === searchPath.trimAny("/")) {
    copyOfParentNodes.push(currentNode);
    return copyOfParentNodes;
  }

  if (currentNode.children) {
    copyOfParentNodes.push(currentNode);
    return depthFirstSearch(path, currentNode.children, copyOfParentNodes);
  }
  return [];
}

function depthFirstSearch(
  path: string,
  routerRecords: Array<RouteRecordRaw>,
  exploredNodes: Array<RouteRecordRaw> = []
): RouteRecordRaw[] {
  for (const routeConfig of routerRecords) {
    const explorePath = getFullPathFromRouteRecords(exploredNodes);

    if (path.indexOf(explorePath) === 0) {
      const routeConfigChain: RouteRecordRaw[] = explore(
        path,
        routeConfig,
        exploredNodes
      );
      if (routeConfigChain.length > 0) return routeConfigChain;
    }
  }
  return [];
}

export function getBreadcrumbsItems(
  currentRoutePath: string
): BreadcrumbsItem[] {
  const routeRecords: RouteRecordRaw[] = depthFirstSearch(
    currentRoutePath,
    routes,
    []
  );
  const result: BreadcrumbsItem[] = [];
  const parents: RouteRecordRaw[] = [];
  for (const routeRecord of routeRecords) {
    parents.push(routeRecord);
    const _to =
      parent.length === 1 ? "/" : getFullPathFromRouteRecords(parents);

    const _meta: RouteMeta | undefined =
      routeRecord.children &&
      routeRecord.children.some(
        (item: RouteRecordRaw): boolean => item.path === ""
      )
        ? routeRecord.children.find(
            (item: RouteRecordRaw): boolean => item.path === ""
          )?.meta
        : routeRecord.meta;

    result.push({
      text:
        _meta === undefined || _meta.breadcrumbsTitle === undefined
          ? "No"
          : _meta.breadcrumbsTitle,
      disable: parents.length === routeRecords.length,
      to: _to,
      exact: true,
    });
  }
  return result;
}
