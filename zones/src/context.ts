import type { Zone, DomainTree } from "@/types";

export const context = import.meta.webpackContext("../data/", {
  regExp: /\.yaml$/,
  recursive: true,
});

function parsePath(path: string): [string, string] {
  const cleaned = path.replace(/^\.\/|\.yaml$/g, "");
  const parts = cleaned.split("/");
  if (parts.length !== 2) throw new Error(`Invalid path length: ${path}`);
  return parts as [string, string];
}

export const domainTree: DomainTree = context.keys().reduce((tree, path) => {
  const module = context(path) as { default: Zone };

  const [zone, sub] = parsePath(path);
  tree[zone] ??= {};
  tree[zone][sub] = module.default;

  return tree;
}, {} as DomainTree);
