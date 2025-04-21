// src/api/aimodel/controllers/aimodel.js

const Replicate = require('replicate').default;

module.exports = {
  async generateImage(ctx) {
    try {
      const data = ctx.request.body;

      const replicate = new Replicate({
        auth: process.env.REPLICATE_API_KEY,
        useFileOutput: false, // Disable FileObject and return URL strings
      });

      const output = await replicate.run(data?.aiModelName, {
        input: {
                     prompt: data?.inputPrompt + " " + data?.defaultPrompt,
                    main_face_image:data?.userImageUrl,
                    image:data?.userImageUrl,
                    num_samples:1
        },
      });

      console.log("Output:", output);
      return ctx.send({ result: output });

    } catch (e) {
      console.error("AI generation error:", e);
      return ctx.badRequest('AI generation failed', { error: e.message });
    }
  }
};
