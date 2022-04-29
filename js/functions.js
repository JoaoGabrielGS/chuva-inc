const abstractTextPreview = document.getElementById("abstract-text-preview");
const abstractTextComplete = document.getElementById("abstract-text-complete");
const showMoreText = document.getElementById("show-more-text");

const wantToShareIdeas = document.getElementById("want-to-share-ideas");
const shareANewIdea = document.getElementById("share-a-new-idea");
const input = document.getElementById("comment-subject");
const textarea = document.getElementById("comment-content")
const sendIdea = document.getElementById("send-btn");

const feedbackSubject = document.getElementById("feedback-subject");
const feedbackCommentText = document.getElementById("feedback-comment-text");

const ideaSent = document.getElementById("idea-sent");
const editTopic = document.getElementById("edit-topic");
const createANewTopic = document.getElementById("create-a-new-topic-btn")

const bold = document.getElementById("bold");
const italic = document.getElementById("italic");

const firstAnswers = document.getElementById("answers1");
const secondAnswers = document.getElementById("answers2");

const likesNumberOne = document.getElementById("likes-number-one");
const likesNumberTwo = document.getElementById("likes-number-two");


const abstractTextShowMore = () => {
    if (abstractTextPreview.hidden){
        abstractTextPreview.hidden = false;

        setTimeout(() => {
            abstractTextComplete.hidden = true;
        }, 100);
        
        return;
    }

    abstractTextPreview.hidden = true;

    setTimeout(() => {
        abstractTextComplete.hidden = false;
    }, 100);
}

const showCreateTopic = () => {
    wantToShareIdeas.hidden = true;
    setTimeout(() => {
        shareANewIdea.hidden = false;
    }, 100)
}

const returnToTopic = () => {
    ideaSent.style.display = "none";
    setTimeout(() => {
        shareANewIdea.hidden = false;
    }, 100);
}

const blurEffect = () => {
    shareANewIdea.hidden = true;
    
    setTimeout(() => {
        ideaSent.style.display = "flex";
    }, 100);
}

const sendFeedback = () => {
    if (!input.value || !textarea.value)
        return alert("Favor preencher todos os campos");

    feedbackSubject.innerHTML = input.value;
    feedbackCommentText.innerHTML = textarea.value;

    return blurEffect();
}

const createNewTopic = () => {
    ideaSent.style.display = "none";
    setTimeout(() => {
        input.value = "";
        textarea.value= "";
        
        shareANewIdea.hidden = false;
    }, 100);
}

const makeTextBold = () => {
    textarea.value = "<b>" + textarea.value + "</b>";
}

const makeTextItalic = () => {
    textarea.value = "<i>" + textarea.value + "</i>"
}

const showAnswersOne = () => {
    if (firstAnswers.style.display == "none")
        return firstAnswers.style.display = "flex";
    
    return firstAnswers.style.display = "none";
}

const showAnswersTwo = () => {
    if(secondAnswers.style.display == 'none')
        return secondAnswers.style.display = "flex";

    return secondAnswers.style.display = "none";
}

const likeQuestionOne = () => {
    likesNumberOne.innerText = new String(new Number(likesNumberOne.innerText) + 1);
}

const likeQuestionTwo = () => {
    likesNumberTwo.innerText = new String(new Number(likesNumberTwo.innerText) + 1);
}

    
