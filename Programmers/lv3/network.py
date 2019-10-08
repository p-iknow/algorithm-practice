def dfs(graph, start_node):
    visit = list()
    stack = list()
    stack.append(start_node)

    while stack:
        node = stack.pop()
        if node not in visit:
            visit.append(node)
            stack.extend(graph[node])

    return visit


def solution(n, computers):
    graph = {node: [] for node in range(n)}

    for i, computer in enumerate(computers):
        for j, conn in enumerate(computer):
            if i != j and conn == 1:
                graph[i].append(j)

    paths = map(sorted, [dfs(graph, node) for node in graph])

    return len(set(["".join(map(str, path)) for path in paths]))
