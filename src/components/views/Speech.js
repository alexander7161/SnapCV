import { speech } from "@google-cloud/speech";

export var transcribe = function(file) {
  return new Promise(function(resolve, reject) {
    // [START speech_transcribe_sync_gcs]
    // Imports the Google Cloud client library

    // Creates a client
    const client = new speech.SpeechClient();
    const gcsUri = file;
    const encoding = "Eencoding of the audio file, e.g. LINEAR16";
    const sampleRateHertz = 16000;
    const languageCode = "BCP-47 language code, e.g. en-US";

    const config = {
      encoding: encoding,
      sampleRateHertz: sampleRateHertz,
      languageCode: languageCode
    };
    const audio = {
      uri: gcsUri
    };

    const request = {
      config: config,
      audio: file
    };

    // Detects speech in the audio file
    client
      .recognize(request)
      .then(data => {
        const response = data[0];
        const transcription = response.results
          .map(result => result.alternatives[0].transcript)
          .join("\n");
        console.log(`Transcription: `, transcription);
        var transcriptInfo = {};
        transcriptInfo.skills = analyseTranscript(transcription);
        console.log(`Skills: `, transcriptInfo.skills);
        var jsonText = JSON.stringify(transcriptInfo);
        document.writeln(jsonText);
        resolve(transcription);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * Function for extracting programming skills from the transcript of the job applicant.
 *
 * @param a string The transcript
 */
function analyseTranscript(a) {
  var useInfo = [];
  for (var i = 0; i < a.length; i++) {
    if (a.search(/ sql /i) != -1) {
      useInfo[i] = "SQL";
    } else if (a.search(/ java /i) != -1) {
      useInfo[i] = "Java";
    } else if (a.search(/ c /i) != -1) {
      useInfo[i] = "C";
    } else if (
      a.search(/ c /i) != -1 &&
      a.search(/plus plus/i) != -1 &&
      a.search(/plusplus/i) != -1
    ) {
      useInfo[i] = "C++";
    } else if (a.search(/ c sharp /i) != -1) {
      useInfo[i] = "C#";
    } else if (a.search(/ python /i) != -1) {
      useInfo[i] = "Python";
    } else if (a.search(/ php /i) != -1) {
      useInfo[i] = "Php";
    } else if (a.search(/ javascript /i) != -1) {
      useInfo[i] = "Javascript";
    }
  }
  return useInfo;
}
