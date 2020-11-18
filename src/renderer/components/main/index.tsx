
/* IMPORT */

import * as React from 'react';
import {connect} from 'overstated';
import MainContainer from '@renderer/containers/main';
import Layout from './layout';
import Mainbar from './mainbar';
import Middlebar from './middlebar';
import Sidebar from './sidebar';
import ContextMenu from './extra/context_menu';
import EditorPlugins from './extra/editor_plugins';
import GlobalPlugins from './extra/global_plugins';
import IPC from './extra/ipc';
import PreviewPlugins from './extra/preview_plugins';
import Shortcuts from './extra/shortcuts';
import QuickPanel from './modals/quick_panel';
import Attachment from '@renderer/containers/main/attachment';
import Attachments from '@renderer/containers/main/attachments';
import Clipboard from '@renderer/containers/main/clipboard';
import Editor from '@renderer/containers/main/editor';
import Export from '@renderer/containers/main/export';
import Import from '@renderer/containers/main/import';
import Loading from '@renderer/containers/main/loading';
import MultiEditor from '@renderer/containers/main/multi_editor';
import Note from '@renderer/containers/main/note';
import Notes from '@renderer/containers/main/notes';
import Search from '@renderer/containers/main/search';
import Skeleton from '@renderer/containers/main/skeleton';
import Sorting from '@renderer/containers/main/sorting';
import Tag from '@renderer/containers/main/tag';
import Tags from '@renderer/containers/main/tags';
import Theme from '@renderer/containers/main/theme';
import Themes from '@renderer/containers/main/themes';
import Trash from '@renderer/containers/main/trash';
import Tutorial from '@renderer/containers/main/tutorial';
import Window from '@renderer/containers/main/window';


/* MAIN */

class Main extends React.Component<{ loading: boolean, refresh: Function, listen: Function, isFocus: boolean, isFullscreen: boolean, isZen: boolean, hasSidebar: boolean }, {}> {

  /* SPECIAL */

  m={
    attachment: Attachment,
    attachments: Attachments,
    clipboard: Clipboard,
    editor: Editor,
    export: Export,
    import: Import,
    loading: Loading,
    multiEditor: MultiEditor,
    note: Note,
    notes: Notes,
    quickPanel: QuickPanel,
    search: Search,
    skeleton: Skeleton,
    sorting: Sorting,
    tag: Tag,
    tags: Tags,
    theme: Theme,
    themes: Themes,
    trash: Trash,
    tutorial: Tutorial,
    window: Window
  };

  async componentDidMount () {

    if ( this.props.loading ) {

      await this.props.refresh ();

    }

    // await this.props.listen ();

  }

  /* RENDER */

  render () {

    const {isFocus, isFullscreen, isZen, hasSidebar} = this.props;

    console.log(this.m)

    return (
      <>
        {/*<div>test</div>*/}
        <ContextMenu container={this.m} />
        {/*<EditorPlugins />*/}
        {/*<GlobalPlugins />*/}
        {/*<IPC />*/}
        {/*<PreviewPlugins />*/}
        {/*<Shortcuts />*/}
        <QuickPanel {...this.m}/>
        {/*<Layout className={`main app-wrapper ${isFullscreen ? 'fullscreen' : ''} ${hasSidebar ? 'focus' : ''} ${isZen ? 'zen' : ''}`} direction="horizontal" resizable={true} isFocus={isFocus} isZen={isZen} hasSidebar={hasSidebar}>*/}
          {/*<Sidebar />*/}
          {/*<Middlebar />*/}
          {/*<Mainbar />*/}
        {/*</Layout>*/}
      </>
    );

  }

}

/* EXPORT */

export default Main;
