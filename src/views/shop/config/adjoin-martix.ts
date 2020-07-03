export type AdjoinType = Array<string>;

export default class AdjoinMatrix {
  vertex: AdjoinType; // 顶点数组（包含所有规格）
  quantity: number; // 矩阵长度
  adjoinArray: Array<number>; // 矩阵数组

  constructor(vertx: AdjoinType) {
    this.vertex = vertx
    this.quantity = this.vertex.length
    this.adjoinArray = []
    this.init()
  }

  // 初始化数组
  init() {
    // 邻接矩阵初始化
    this.adjoinArray = Array(this.quantity * this.quantity).fill(0)
  }

  /*
   * @param id string
   * @param sides Array<string>
   *  传入一个顶点，和当前顶点可达的顶点数组，将对应位置置为1
   */
  setAdjoinVertexs(id: string, sides: AdjoinType) {
    const pIndex = this.vertex.indexOf(id)
    sides.forEach(item => {
      const index = this.vertex.indexOf(item)
      // 从邻接矩阵上看，
      // pIndex 是传入的顶点 index；
      // quantity 是邻接矩阵中行的 length；
      // index 是传入的顶点下的可组合的顶点元素下标
      // 那么 [pIndex * this.quantity + index] 就是可组合的 sku，置为 1
      this.adjoinArray[pIndex * this.quantity + index] = 1
    })
  }

  /*
   * @param id string
   * 传入顶点的值，获取该顶点的列
   */
  getVertexCol(id: string) {
    const index = this.vertex.indexOf(id)
    const col: Array<number> = []
    this.vertex.forEach((item, pIndex) => {
      col.push(this.adjoinArray[index + this.quantity * pIndex])
    })
    return col
  }

  /*
   * @param params Array<string>
   * 传入一个顶点数组，求出该数组所有顶点的列的合
   */
  getColSum(params: AdjoinType) {
    // 所有顶点的列，[[], [], ...]
    const paramsVertex = params.map(id => this.getVertexCol(id))
    const paramsVertexSum: Array<number> = []
    // 下面这个 forEach 和 map 能够取出每个顶点的列的同一个 index 下的值（也就是每个顶点列的同一行数据）
    // 得到顶点列的同一行数据后，通过 reduce 进行相加。数字大于等于总列数，说明是可选的
    this.vertex.forEach((item, index) => {
      const rowtotal = paramsVertex
        .map(value => value[index])
        .reduce((total, current) => {
          total += current || 0
          return total
        }, 0)
      paramsVertexSum.push(rowtotal)
    })
    return paramsVertexSum
  }

  /*
   *  @param params Array<string>
   * 传入一个顶点数组，求出并集
   */
  getCollection(params: AdjoinType) {
    const paramsColSum = this.getColSum(params)
    const collections: AdjoinType = []
    paramsColSum.forEach((item, index) => {
      if (item && this.vertex[index]) {
        collections.push(this.vertex[index])
      }
    })
    return collections
  }

  /*
   *  @param params Array<string>
   * 传入一个顶点数组，求出交集
   */
  getUnions(params: AdjoinType) {
    const paramsColSum = this.getColSum(params)
    const unions: AdjoinType = []
    paramsColSum.forEach((item, index) => {
      // 数字大于等于总列数，说明是可选的
      if (item >= params.length && this.vertex[index]) {
        unions.push(this.vertex[index])
      }
    })
    return unions
  }
}
