<template>
    <svg class="TheSprite"
         xmlns="http://www.w3.org/2000/svg">

        <IconEdit />
        <IconCross />
        <IconFolder />
        <IconFolderOpened />
        <IconFile />
    </svg>
</template>
<script>
    import IconEdit from './SpriteSet/IconEdit';
    import IconCross from '@/components/layout/SpriteSet/IconCross';
    import IconFolder from '@/components/layout/SpriteSet/IconFolder';
    import IconFolderOpened from '@/components/layout/SpriteSet/IconFolderOpened';
    import IconFile from '@/components/layout/SpriteSet/IconFile';

    export default {
        name: 'TheSprite',
        components: {
            IconFile,
            IconFolderOpened,
            IconFolder,
            IconCross,
            IconEdit
        },
    };
</script>
<style lang="scss" scoped>
    .TheSprite {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        opacity: 0;
        pointer-events: none;
    }
</style>
