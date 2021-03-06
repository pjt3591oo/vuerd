import { html, customElement } from "lit-element";
import { styleMap } from "lit-html/directives/style-map";
import { repeat } from "lit-html/directives/repeat";
import { EditorElement } from "@src/components/EditorElement";
import { Logger } from "@src/core/Logger";
import { Table } from "@src/core/store/Table";
import { Memo } from "@src/core/store/Memo";
import { UserMouse } from "@src/core/store/Share";
import { virtualTable } from "@src/core/helper/TableHelper";

@customElement("vuerd-canvas")
class Canvas extends EditorElement {
  private tables: Table[] = [];
  private memos: Memo[] = [];
  private userMouseList: UserMouse[] = [];

  get virtualTables() {
    const {
      width,
      height,
      scrollLeft,
      scrollTop,
    } = this.context.store.canvasState;
    const minX = scrollLeft;
    const minY = scrollTop;
    const maxX = minX + width;
    const maxY = minY + height;
    return this.tables.filter((table) =>
      virtualTable(
        {
          minX,
          minY,
          maxX,
          maxY,
        },
        table
      )
    );
  }

  connectedCallback() {
    super.connectedCallback();
    const { store } = this.context;
    this.tables = store.tableState.tables;
    this.memos = store.memoState.memos;
    this.userMouseList = store.shareState.userMouseList;
    this.subscriptionList.push(
      store.observe(this.tables, () => this.requestUpdate()),
      store.observe(this.memos, () => this.requestUpdate()),
      store.observe(this.userMouseList, () => this.requestUpdate()),
      store.observe(store.canvasState, (name) => {
        switch (name) {
          case "width":
          case "height":
            this.requestUpdate();
            break;
        }
      }),
      store.observe(store.canvasState.show, (name) => {
        if (name === "relationship") {
          this.requestUpdate();
        }
      })
    );
  }

  render() {
    const { width, height } = this.context.store.canvasState;
    const { show } = this.context.store.canvasState;
    return html`
      <div
        class="vuerd-canvas"
        style=${styleMap({
          width: `${width}px`,
          height: `${height}px`,
        })}
      >
        ${repeat(
          this.tables,
          (table) => table.id,
          (table) => html`<vuerd-table .table=${table}></vuerd-table>`
        )}
        ${repeat(
          this.memos,
          (memo) => memo.id,
          (memo) => html`<vuerd-memo .memo=${memo}></vuerd-memo>`
        )}
        ${show.relationship ? html`<vuerd-canvas-svg></vuerd-canvas-svg>` : ""}
        ${repeat(
          this.userMouseList,
          (userMouse) => userMouse.id,
          (userMouse) =>
            html`
              <vuerd-share-mouse .userMouse=${userMouse}></vuerd-share-mouse>
            `
        )}
      </div>
    `;
  }
}
