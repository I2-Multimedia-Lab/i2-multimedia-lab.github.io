// {
//     'title':'',     // 标题
//     'date':'',      // 年月日
//     'newbrand':true,    // 是否显示新闻前的小红色(New)标志
//     'content':'',   // 用户点开新闻之后的内容。该部分如果要分段的话可以这么写：'content':'<p>第一段</p><p>第二段</p><p>第三段</p>'
// }

news = [
    {
        'title':'Two paper accepted by ACM MM25!',
        'date':'2025-07-06',
        'newbrand':true,
        'content':'<p> Congrats to our team member Yidan for her paper “AlignCAT: Visual-Linguistic Alignment of Category and Attribute for Weakly Supervised Visual Grounding” and Kanglin for his paper “HydraMamba: Multi-Head State Space Model for Global Point Cloud Learning” both accepted by ACM Multimedia 2025, which will be held in Dublin, Ireland, in October 2025. Paper and code will be made accessible soon. </p>',
    },
  {
        'title':'One paper accepted by IEEE TIP!',
        'date':'2025-04-10',
        'newbrand':true,
        'content':'<p> Congrats to our team member Yao Yuan for the acceptance of a paper by IEEE TIP 2025. This paper proposed a uncertainty guided refinement strategy for salient object detection, which yields the state-of-the-art performance across multiple datasets. </p>',
    },
   {
        'title':'One paper accepted by NeurIPS 2024!',
        'date':'2024-09-26',
        'newbrand':false,
        'content':'<p> Congrats to Chenyi for the acceptance of a paper by NeurIPS 2024. NeurIPS is a top-ranked conference in the fields of machine learning, computer vision, and artificial intelligence. NeurIPS was founded in 1987 and is now a multi-track interdisciplinary annual meeting that includes invited talks, demonstrations, symposia, and oral and poster presentations of refereed papers. Along with the conference is a professional exposition focusing on machine learning in practice, a series of tutorials, and topical workshops that provide a less formal setting for the exchange of ideas. It will be held in Vancouver this December. :) </p>',
    },
    {
        'title':'Two papers accepted by IJCAI 2024!',
        'date':'2024-04-20',
        'newbrand':false,
        'content':'<p>Our paper "Pointsoup: High-Performance and Extremely Low-Decoding-Latency Learned Geometry Codec for Large-Scale Point Cloud Scenes" and "Unified Unsupervised Salient Object Detection via Knowledge Transfer" are accpected by International Joint Conference on Artificial Intelligence (IJCAI) 2024. Congrats to Kang You and Yao Yuan!</p>',
    },
    {
        'title':'Two papers accepted by CVPR 2024!',
        'date':'2024-02-27',
        'newbrand':false,
        'content':'<p>Our paper "CDFormer: When Degradation Prediction Embraces  Diffusion Model for Blind Image Super-Resolution" and "Puff-Net: Efficient Style Transfer with Pure Content and Style Feature Fusion Network" are accpected by Conference on Computer Vision and Pattern Recognition (CVPR) 2024. Congrats to Qingguo Liu, Chenyi Zhuang, and Sizhe Zheng! </p>',
    },
    {
        'title':'One paper accepted by IEEE Trans. Multimedia!',
        'date':'2024-02-13',
        'newbrand':false,
        'content':'<p>Congratulations to Qingguo Liu for the acceptance of a paper by IEEE Trans. Multimedia. This paper proposed a degradation-aware self-attention based Transformer for blind image super-resolution. It addresses the critical problem in blind SR that how to make the network adaptive to unknow image degradation. It designs a degradation-oriented Transformer for image reconstruction, which also are the first time to introduce Transformer architecture to blind SR. The experiments are tested on two scenarios, i.e., degradation process with isotropic Gaussian kernels and anisotropic Gaussian kernels and noises. Congratulations again to Qinggguo for the amazing achievement!</p>',
    },
    {
        'title':'One paper accepted by AAAI 2024!',
        'date':'2023-12-12',
        'newbrand':false,
        'content':'<p>The paper "Transformer-based No-Reference Image Quality Assessment via Supervised Contrastive Learning" completed by Jinsong Shi has been accepted by the Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI-24). AAAI-24 received 12100 paper submissions, with a final acceptance rate of 23.75%. The Association for the Advancement of Artificial Intelligence (AAAI) is the premier scientific society dedicated to advancing the scientific understanding of the mechanisms underlying thought and intelligent behavior and their embodiment in machines, and is a Class A conference recommended by the China Computer Federation (CCF). Congrats to Jinsong!</p>',
    },
    {
        'title':'Two papers accepted by TMM!',
        'date':'2023-10-12',
        'newbrand':false,
        'content':'<p>The paper "Blind Image Quality Assessment via Transformer Predicted Error Map and Perceptual Quality Token" completed by Jinsong Shi and the paper "RLGrid: Reinforcement Learning Controlled Grid Deformation for Coarse to Fine Point Court Completion" completed by Shanshan Li have accepted in the international journal IEEE Trans On Multimedia (TMM). Congrats! 🎉🎉</p>',
    },
    {
        'title':'Two papers accepted by ACM MM 2023!',
        'date':'2023-07-27',
        'newbrand':false,
        'content':'<p>The paper "StylePrompter: All Styles Need Is Attention" completed by Chenyi Zhuang and the paper "Video Frame Interpolation with Flow Transformer" completed by Haoyue Tian were accepted by the ACM Multimedia (ACM MM) 2023. The ACM International Conference on Multimedia (ACM MM) is a top-level global event and an A-class international conference recommended by the China Computer Federation (CCF) in the multimedia field. The conference will be held in Ottawa, Canada in 2023. Congrats to Chenyi and Haoyue!</p>',
    },
    {
        'title':'We are calling for participation on the  topic of "Volumetric Video Processing"',
        'date':'2023-07-20',
        'newbrand':false,
        'content':'<p>We are organizing a special issue in the journal of Frontiers in Signal Processing. The topic is Volumetric Video Processing. Volumetric video enables the immersive representation of real-world objects and environments, offering new possibilities in various fields, including entertainment, education, cultural heritage, and medicine. This project aims to bring together the latest research and development for volumetric video processing. The detailed call-for-paper is available at: https://www.frontiersin.org/research-topics/57622/volumetric-video-processing   We welcome any submission related to volumetric video. </p>',
    },
    {
        'title':'Our undergraduate student\'s paper accepted by IEEE TCDS!',
        'date':'2023-05-03',
        'newbrand':false,
        'content':'<p>Congratulations to our undergraduate student Yihan Tang for his work got accepted by IEEE Transactions on Cognitive and Developmental Systems. Yihan is a senior undergraduate student, majored in computer science and technology, and has joined our team since his second year of college study. He is actively engaged in the research of the cutting-edge technology in computer vision and deep learning. This is the first time that undergraduate student gets research work published in prestigious international journal, which is a momentous achievement in our team!    Well done!</p><p>ABSTRACT:  Predicting salient regions in images requires the capture of contextual information in the scene. Conventional saliency models typically use the encoder-decoder architecture and multi-scale feature fusion for modeling contextual features, which, however, possess huge computational cost and model parameters. In this paper, we address the saliency prediction task by capturing long-range dependencies based on the self-attention mechanism. Self-attention has been widely used in image recognition or other classification tasks, but is still rarely being considered in regression based saliency prediction task. Inspired by non-local block, we propose a new SALiency prediction network in which DeepConvNet is integrated with the Attention mechanism, namely SalDA. Considering each feature map may capture different salient regions, our spatial attention module firstly adaptively aggregates the feature at each position by a weighted sum of the features at all positions within each independent channel. Meanwhile, in order to capture interdependence between channels, we also introduce a channel attention module to integrate different features among different channels. We combine these two attention modules into a multi-attention module to further improve the saliency map prediction for the network. We show the effectiveness of SalDA on the largest saliency prediction dataset SALICON. Compared to other state-of-the-art methods in this area, we can yield comparable saliency prediction performance, but with substantially less model parameters and shorter inference time. </p>',
    },
    {
        'title':'Dr. Gao was invited to present an IEEE SPS webinar!',
        'date':'2023-03-30',
        'newbrand':false,
        'content':'<p>Dr. Gao was invited to present an IEEE SPS webinar. \
        This presentation will cover the technologies about quality evaluation for omnidirectional video/image developed in our team. \
        Most of the works were done by our team member Pengwei Zhang during his postgraduate study. Thanks him for these excellent works. \
        </p> <p>The presentation will take place on Wednesday April 12, 2023 @ 9:30 pm Beijing time. If you are interested in this seminar. \
        Please register this evenet via the link https://signalprocessingsociety.org/blog/sps-webinar-quality-assessment-omnidirectional-videoimages-spatio-temporal-distortion-modeling</p>\
        <p>ABSTRACT: Omnidirectional video, also known as 360-degree video, has become increasingly popular nowadays due to its ability to provide immersive and interactive visual experiences. \
        However, the ultra high resolution and the spherical observation space brought by the large spherical viewing range make omnidirectional video distinctly different from traditional 2D video. \
        To date, the video quality assessment (VQA) for omnidirectional video is still an open issue. This talk contains two parts. The first part introduces a spatio–temporal modeling approach. \
        In this approach, we firstly construct a spatio–temporal quality assessment unit to evaluate the average distortion in temporal dimension at the eye fixation level. \
        Then, we give a detailed solution of how to to integrate the three existing spatial VQA metrics into this approach. Besides, the cross-format omnidirectional video distortion measurement \
        is also discussed. Based on the modeling approach, a full reference objective quality assessment metric for omnidirectional video is derived, namely OV-PSNR. Experimental results show that \
        OV-PSNR greatly improves the prediction performance of existing VQA metrics for omnidirectional video.The second part of this talk will introduce our attempt to using deep learning for blind\
        omnidirectional image quality assessment. We will firstly talk about the challenges currently faced in this filed, and then provide the details about our proposed model BOIQA. Our model \
        contains two-stage training: one is to pre-train the model to obtain the objective error map with reference image, and the other one is to train the model to predict the score with \
        the inferenced objective error map, where we employ spatial weight map as a prior to predict human sensitivity map. Finally, we provide the performance of our BOIQA on the datasets CVIQ \
        and OIQA. </p>',
    },
    {
        'title':'Our paper accepted by CVPR 2023!',
        'date':'2023-02-28',
        'newbrand':false,
        'content':'<p>Congratulations to Li Shanshan on his excellent work "ProxyFormer: Proxy Alignment Assisted Point Cloud Completion with Missing Part Sensitive Transformer", which has accepted by CVPR 2023! Well done!</p><p>ABSTRACT:Problems such as equipment defects or limited viewpoints will lead the captured point clouds to be incomplete. Therefore, recovering the complete point clouds from the partial ones plays an vital role in many practical tasks, and one of the keys lies in the prediction of the missing part. In this paper, we propose a novel point cloud completion approach namely ProxyFormer that divides point clouds into existing (input) and missing (to be predicted) parts and each part communicates information through its proxies. Specifically, we fuse information into point proxy via feature and position extractor, and generate features for missing point proxies from the features of existing point proxies. Then, in order to better perceive the position of missing points, we design a missing part sensitive transformer, which converts random normal distribution into reasonable position information, and uses proxy alignment to refine the missing proxies. It makes the predicted point proxies more sensitive to the features and positions of the missing part, and thus make these proxies more suitable for subsequent coarse-to-fine processes. Experimental results show that our method outperforms state-of-the-art completion networks on several benchmark datasets and has the fastest inference speed.</p>',
    },
    {
        'title':'We are organizing a workshop in ICME 2023, Brisbane, Australia',
        'date':'2023-02-10',
        'newbrand':false,
        'content':'<p>We are organizing a workshop on "Immersive Media Compression" in ICME 2023, Brisbane, Australia</p><p>The scope of this workshop is immersive multimedia (point clouds, light fields, omnidirectional image and video, etc), visual data compression, image and quality assessment, deep learning for immersive data processing, and so on. </p> <p> Please consider to submit your work to this workshop. Looking forward to seeing you in the sunshine city Brisbane. More details about this workshop can be found at the website: https://imc-icme2023.github.io/</p>',
    },
    {
        'title':'New homepage of our I2ML is published online!',
        'date':'2023-01-25',
        'newbrand':false,
        'content':'<p>The home page of I2ML has received a major update!🎉🎉🎉</p><p>The updated responsive website can give you a smooth viewing experience on different devices, including computer, mobile phone and pad!</p><p>The website has changed to i2-multimedia-lab.github.io, the corresponding Github is github.com/I2-Multimedia-Lab/i2-multimedia-lab.github.io</p><p>Publishing content of our website can be achieved simply by editing dictionary elements! See our GitHub for details of the source code and the guidance!😄</p>',
    },
    {
        'title':'Our paper accepted by ACM Multimedia APCCPA Workshop 2022!',
        'date':'2022-08-08',
        'newbrand':false,
        'content':'<p>Congratulations on Kang You!</p><p>Congratulations on Kang You\'s research on point cloud compression, which was accepted as oral by the workshop APCCPA of ACM MM 2022, a CCF-A conference in the multimedia field.</p><p>ABSTRACT: Point cloud is a crucial representation of 3D contents, which has been widely used in many areas such as virtual reality, mixed reality, autonomous driving, etc. With the boost of the number of points in the data, how to efficiently compress point cloud becomes a challenging problem. In this paper, we propose a set of significant improvements to patch-based point cloud compression, i.e., a learnable context model for entropy coding, octree coding for sampling centroid points, and an integrated compression and training process. In addition, we propose an adversarial network to improve the uniformity of points during reconstruction. Our experiments show that the improved patch-based autoencoder outperforms the state-of-the-art in terms of rate-distortion performance, on both sparse and large-scale point clouds. More importantly, our method can maintain a short compression time while ensuring the reconstruction quality.</p>',
    },
    {
        'title':'Our paper accepted by IJCAI 2022!',
        'date':'2022-04-21',
        'newbrand':false,
        'content':"<p>Congratulations on Haoyue's work accpted by the International Joint Conference on Artificial Intelligence (IJCAI 2022), the top conference in CCF-A, with only 15% acceptance. The paper was also selected as Long Presentation (Long Show is another 25% of the accepted papers). Congratulations on Haoyue's breakthrough, which is very difficult. Very well-deserved achievement! Congratulations and Well Done!</p><p>ABSTRACT: Video frame interpolation task has recently become more and more prevalent in the computer vision field. At present, a number of researches based on deep learning have achieved great success. Most of them are either based on optical flow information, or interpolation kernel, or a combination of these two methods. However, these methods have ignored that there are grid restrictions on the position of kernel region during synthesizing each target pixel. These limitations result in that they cannot well adapt to the irregularity of object shape and uncertainty of motion, which may lead to irrelevant reference pixels used for interpolation. In order to solve this problem, we revisit the deformable convolution for video interpolation, which can break the fixed grid restrictions on the kernel region, making the distribution of reference points more suitable for the shape of the object, and thus warp a more accurate interpolation frame. Experiments are conducted on four datasets to demonstrate the superior performance of the proposed model in comparison to the state-of-the-art alternatives.</p>",
    },
    {
        'title':'Our paper accepted by IEEE ICASSP 2022!',
        'date':'2022-01-22',
        'newbrand':false,
        'content':"<p>Congratulations on the acceptance of Haoyue's research by the prestigious International Conference IEEE ICASSP 2022 in the field of image/video processing, which is scheduled to be held in Singapore in May. IEEE ICASSP is the CCF-B conference recommended by the Chinese Computer Society. Congratulations on Haoyue, well done!🌹🌹🌹</p><p>ABSTRACT: Motion estimation and motion compensation are indispensable parts of inter prediction in video coding. Since the motion vector of objects is mostly in fractional pixel units, original reference pictures may not accurately provide a suitable reference for motion compensation. In this paper, we propose a deep reference picture generator which can create a picture that is more relevant to the cur-rent encoding frame, thereby further reducing temporal redundancy and improving video compression efficiency. Inspired by the recent progress of Convolutional Neural Network(CNN), this paper pro-poses to use a dilated CNN to build the generator. Moreover, we insert the generated deep picture into Versatile Video Coding(VVC) as a reference picture and perform a comprehensive set of experiments to evaluate the effectiveness of our network on the latest VVC Test Model–VTM. The experimental results demonstrate that our pro-posed method achieves on average 9.7% bit saving compared with VVC under low-delay P configuration.</p>",
    },
    {
        'title':'Our paper of point cloud compression accepted by ACM Multimedia Asia 2021!',
        'date':'2021-09-28',
        'newbrand':false,
        'content':"<p>Congratulations on Kang You's research on 3D point cloud compression and reconstruction accepted by ACM Multimedia Asia 2021, a prestigious international conference in the multimedia field. The acceptance rate is only 32.7%. Congratulations! Well done!</p><p>ABSTRACT: The ever-increasing 3D application makes the point cloud compression unprecedentedly important and needed. In this paper, we propose a patch-based compression process using deep learning, focusing on the lossy point cloud geometry compression. Unlike existing point cloud compression networks, which apply feature extraction and reconstruction on the entire point cloud, we divide the point cloud into patches and compress each patch independently. In the decoding process, we finally assemble the decompressed patches into a complete point cloud. In addition, we train our network by a patch-to-patch criterion, i.e., use the local reconstruction loss for optimization, to approximate the global reconstruction optimality. Our method outperforms the state-of-the-art in terms of rate-distortion performance, especially at low bitrates. Moreover, the compression process we proposed can guarantee to generate the same number of points as the input. The network model of this method can be easily applied to other point cloud reconstruction problems, such as upsampling.</p>",
    },
    {
        'title':'Our paper accepted by ICCV2021 workshop on Adversarial Robustness In the Real World!',
        'date':'2021-08-13',
        'newbrand':false,
        'content':"<p>Congratulations on Cheng Zhang's research, which was received by workshop on Adversarial Robustness In the Real World of IEEE Int. Conf. Computer Vision (ICCV2021). This is a great result, as the paper has undergone several rounds of modifications and has been accepted at last. Congratulations to Cheng Zhang, very well deserved!</p><p>ABSTRACT: Recent studies have shown that neural network (NN) based image classifiers are highly vulnerable to adversarial examples, which poses a threat to security-sensitive image recognition task. Prior work has shown that JPEG compression can combat the drop in classification accuracy on adversarial examples to some extent. But, as the compression ratio increases, traditional JPEG compression is insufficient to defend those attacks but can cause an abrupt accuracy decline to the benign images. In this paper, with the aim of fully filtering the adversarial perturbations, we firstly make modifications to traditional JPEG compression algorithm which becomes more favorable for NN. Specifically, based on an analysis of the frequency coefficient, we design a NN-favored quantization table for compression. Considering compression as a data augmentation strategy, we then combine our model-agnostic preprocess with noisy training. We fine-tune the pre-trained model by training with images encoded at different compression levels, thus generating multiple classifiers. Finally, since lower (higher) compression ratio can remove both perturbations and original features slightly (aggressively), we use these trained multiple models for model ensemble. The majority vote of the ensemble of models is adopted as final predictions. Experiments results show our method can improve defense efficiency while maintaining original accuracy.</p>",
    },
]
