export default class ClipboardCopier {
    copy(id, shareString, onSuccess, onFailure) {
      shareString += "\nhttps://localstorage.tools/trivia/app/#/quiz/" + id;
      if(navigator && navigator.clipboard.writeText(shareString)) {
        onSuccess();
      }
      else {
        onFailure();
      } 
    }

    formatTime(start, end) {
      let ms = new Date(end) - new Date(start);
      let seconds = ms / 1000;
      let minutes = String(Math.floor(seconds / 60));
      seconds = String(Math.floor(seconds % 60));
      if (seconds.length === 1) {
        seconds = "0" + seconds;
      }
      return `${minutes}:${seconds}`;
    }

    // async write(str) {
    //   try {
    //     const blob = new Blob([str], { type: "text/plain" });

    //     await navigator.clipboard.write([
    //       new ClipboardItem({
    //         [blob.type]: blob,
    //       }),
    //     ]);
    //   } catch (err) {
    //     console.error(err.name, err.message);
    //   }
    // }
  }
