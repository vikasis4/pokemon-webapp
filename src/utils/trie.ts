export type TrieType = {
  insert: (word: string) => void;
  searchPrefix: (prefix: string) => string[];
};


class TrieNode {
  children: Record<string, TrieNode>;
  isEnd: boolean;

  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node: TrieNode = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  private findNode(prefix: string): TrieNode | null {
    let node: TrieNode = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node;
  }

  searchPrefix(prefix: string): string[] {
    const node = this.findNode(prefix);
    if (!node) return [];

    const results: string[] = [];

    const dfs = (currNode: TrieNode, path: string): void => {
      if (currNode.isEnd) results.push(path);
      for (const char in currNode.children) {
        dfs(currNode.children[char], path + char);
      }
    };

    dfs(node, prefix);
    return results;
  }
}

export default Trie;
