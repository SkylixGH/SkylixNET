<script lang="ts">
import { goto } from "$app/navigation";


    interface Card {
        image: string;
        title: string;
        description: string;
        href: string;
    }

    export let cards: Card[] = [];
</script>

<div class="cards">
    <div class="inner">
        {#each cards as card}
            <div class="item" on:click={() => goto(card.href)}>
                <div class="header">
                    <img
                        src={card.image}
                        alt={""}
                        class="image"
                    />

                    
                    <div class="logo">
                        <img
                        src={card.image}
                        alt={""}
                        class="image"
                        />
                    </div>
                </div>
                
                <div class="body">
                    <span class="title">{ card.title }</span>
                    <span class="description">{ card.description }</span>
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "Colors.scss";

    .cards {
        display: flex;
        gap: $space3;
        padding: 0 $space3;
        padding-top: $space3;
        align-items: center;
        justify-content: center;
        
        .inner {
            flex-wrap: wrap;
            display: flex;
            gap: $space3;
            width: 100%;
            max-width: 1200px;
            justify-content: space-evenly;
            
            .item {
                display: flex;
                flex-direction: column;
                background: $dynamic1;
                border-radius: $radius2;
                flex: 1 1 300px;
                overflow: auto;

                .header {
                    height: 150px;
                    min-height: 150px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;

                    .logo {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        overflow: hidden;
                        width: 100px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 100%;
                        outline: 0px solid $dynamic1;
                        transition: $transition;
                        box-sizing: initial;
                        transform: translate(-50%, -50%);
                        background: $solid1;

                        img {
                            width: 60px;
                            transition: $transition;
                        }
                    }

                    & > img {
                        width: 100%;
                        filter: blur(30px);
                        transition: $transition;
                    }
                }

                .body {
                    padding: $space2;
                    display: flex;
                    flex-direction: column;
                    gap: $space2;
                    background: $dynamic1;
                    height: 100%;

                    .title {
                        color: $text1;
                        font-size: 13px;
                        margin: $space2 0;
                    }

                    .description {
                        color: $text2;
                        font-size: 13px;
                        margin-bottom: $space2;
                    }
                }

                &:hover {
                    cursor: pointer;

                    .header {
                        & > img {
                            transform: scale(1.2);
                            filter: blur(20);
                        }

                        .logo {
                            outline-width: 10px;
                            outline-offset: $space1;
                            outline-color: $dynamic2;
                            
                            img {
                                transform: scale(1.2);
                            }
                        }
                    }
                }
            }
        }
    }
</style>