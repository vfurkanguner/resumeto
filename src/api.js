export const getResumeData = async (resumeSlug) => {
    
    // TODO: make an api call to get relatred resume data
    return fakeData
}


const fakeData = {
    state: {
        name: "John",
        bio: "This is my bio ✨",
        jobTitle: "Software Engineer",
        surname: "Doe",
        country: "Turkey",
        linkedin: "linkedin.com",
        github: "github.com",
        website: "vfurkanguner.com",
        summary: "You can edit this summary from the form on the left.",
    },
    experienceBlocks: [],
    educationBlocks: [],
    skillBlocks: [],
    socialBlocks: [],
    projectBlocks: []
};